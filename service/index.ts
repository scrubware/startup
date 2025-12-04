


// External Imports
import cookieParser from 'cookie-parser';
import express from 'express';
import { join, dirname } from "path"
import { fileURLToPath } from 'url'
import { WebSocketServer } from 'ws';

// Models
import { WithId } from './serverModels.js';
import { AuthData } from '../shared/dataModels.js';
import { FeedItem, FeedItemTypes, Profile, asPost, Post } from "../shared/contentModels.js"
import {  LoginRequest, 
          RegisterRequest, 
          RegisterResult, 
          LoginResult, 
          GetProfileRequest, 
          LoginFailureWrongPassword, 
          LoginFailureWrongUsername, 
          AvailableResult, 
          MakeFeedItemRequest, 
          UpdateNameRequest, 
          DeleteFeedItemRequest
          } from "../shared/apiModels.js"
import { AddToFeedCNM, NetworkEvent, NetworkObject, RefreshFeedCNM } from '../shared/networkModels.js'

// Scripts
import { DatabaseDAO } from './databaseDAO.js';
import { ObjectId } from 'mongodb';






// ### Initialization

const authCookieName = 'authData';
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());                // JSON parsing middleware (for converting requests)
app.use(cookieParser());                // Cookie parsing middleware (for auth)
app.use(express.static(join(dirname(fileURLToPath(import.meta.url)), '../public')));    // Static page middleware

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const socketServer = new WebSocketServer({ server });

let api = express.Router();
app.use(`/api`, api);



let dao: DatabaseDAO = new DatabaseDAO();
dao.initialize();



socketServer.on('connection', (socket) => {
  socket.isAlive = true;

  console.log("socket connected")

  socket.on('message', (data) => {
    console.log("received ws message: ",data);
  });

  socket.on('pong', () => {
    socket.isAlive = true;
  });
})

setInterval(() => {
  socketServer.clients.forEach(function each(client) {
    if (client.isAlive === false) return client.terminate();

    client.isAlive = false;
    client.ping();
  });
}, 10000);








// ########### helper functions

function getAuthData(req): AuthData {
  return JSON.parse(req.cookies[authCookieName])
}

function setAuthData(res, authData: AuthData) {
  res.cookie(authCookieName, JSON.stringify(authData), {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

function eraseAuthData(res) {
  res.clearCookie(authCookieName);
}








// ########## api/user

api.get('/user/available', async (req, res) => {
  let available: boolean = (await dao.getUser(req.query.username) == null)
  res.status(200).send(JSON.stringify(new AvailableResult(available)))
  console.log("availability checked: " + req.query.username + " | " + available)
});

api.post('/user/register', async (req, res) => {
  const request: RegisterRequest = req.body;
  if (await dao.getUser(request.username) != null) {
    res.status(409).send({ msg: 'Existing user' });
    console.log("attempted re-registering: " + request.username)
  } else {
    await dao.createUser(request.username, request.password, request.displayName);
    const auth: RegisterResult = await dao.createAuth(request.username,request.password);
    console.log("created register auth: " + JSON.stringify(auth))
    setAuthData(res,auth)
    res.status(200).send(JSON.stringify(auth));
  }
});

api.post('/user/login', async (req, res) => {
  const request: LoginRequest = req.body;
  const user: WithId<Profile> = await dao.getUser(request.username);
  if (user != null) {
    if (await dao.passwordIsCorrect(request.username,request.password)) {
      const auth: AuthData = await dao.createAuth(request.username, request.password)
      setAuthData(res,auth)
      res.status(200).send(JSON.stringify(new LoginResult(user)))
      console.log("logged in: " + request.username)
    } else {
      res.status(400).send(JSON.stringify(LoginFailureWrongPassword))
      console.log("wrong password: " + request.username)
    }
  } else {
    res.status(400).send(JSON.stringify(LoginFailureWrongUsername))
    console.log("wrong username: " + request.username)
  }
});

api.delete('/user/logout', async (req, res) => {
  let auth: AuthData = getAuthData(req);
  if (await dao.authIsValid(auth.authToken) == true) {
    dao.deleteAuth(auth.authToken);
    eraseAuthData(res)
    res.status(200).send({ msg: 'Logout successful' });
    console.log("logged out auth session: " + auth.authToken)
    //console.log(dao.listAuths())
  } else {
    eraseAuthData(res)
    res.status(400).send({ msg: 'AuthToken not valid' });
    console.log("failed to log out auth session: " + auth.authToken)
  }
});







// ########## auth middleware

const verifyAuth = async (req, res, next) => {
  if (!await dao.authIsValid(getAuthData(req).authToken)) {
    res.status(401);
    return;
  }

  next();
};







// ########### api/content

api.get('/content/feed', verifyAuth, async (req, res) => {
  let feed: Array<FeedItem> = await dao.getFeed();

  //console.log(feed)

  res.status(200).send(JSON.stringify(feed));
})

api.post('/content/make', verifyAuth, async (req, res) => {

  let request: MakeFeedItemRequest = req.body;
  let item: FeedItem = request.feedItem;

  if (item.type == FeedItemTypes.Post) {
    let post: Post = asPost(item);
    post.date = new Date();
    post.score = 0;
    await dao.createFeedItem(post);

    let nobj = new NetworkObject(NetworkEvent.AddToFeed, await new AddToFeedCNM(post).serialize());

    socketServer.clients.forEach((client: WebSocket) => {
      if (client.readyState == WebSocket.OPEN) {
        client.send(JSON.stringify(nobj));
        console.log("sent the add package to a client")
      }
    });
  }

  res.status(200).send();
})

api.delete('/content/delete', verifyAuth, async (req, res) => {
  let request: DeleteFeedItemRequest = req.body;
  let profile: WithId<Profile> = await dao.getUserFromAuth(getAuthData(req).authToken)
  let id: ObjectId = new ObjectId(request._id)
  console.log(id);
  let item: FeedItem = await dao.getFeedItem(id)
  if (profile.username == item.username) {
    await dao.deleteFeedItem(id)

    let nobj = new NetworkObject(NetworkEvent.RefreshFeed, await new RefreshFeedCNM(await dao.getFeed()).serialize());

    socketServer.clients.forEach((client: WebSocket) => {
      if (client.readyState == WebSocket.OPEN) {
        client.send(JSON.stringify(nobj));
        console.log("sent the refresh package to a client")
      }
    });

    res.status(200).send();
  } else {
    console.log(profile.username," tried to delete a post by ",item.username)
    res.status(401).send();
  }
  
})








// ######## api/profile


api.get('/profile', verifyAuth, async (req, res) => {
  let request: GetProfileRequest = req.body;
  let profile: Profile = await dao.getUser(request.fetchUsername);
  res.status(200).send(JSON.stringify(profile));
});

api.patch('/profile/name', verifyAuth, async (req, res) => {
  let request: UpdateNameRequest = req.body;
  let profile: Profile = await dao.getUser(getAuthData(req).username)
});

