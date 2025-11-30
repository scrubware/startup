import cookieParser from 'cookie-parser';
import express from 'express';

const authCookieName = 'authData';
const app = express();

import { join, dirname } from "path"
import { fileURLToPath } from 'url'
import { DAO } from "./DAO.js"
import { LoginRequest, RegisterRequest, AuthData, AuthToken, LogoutRequest, RegisterResult, LoginResult, GetProfileRequest, LoginFailureWrongPassword, LoginFailureWrongUsername, AvailableRequest, AvailableResult, GetFeedRequest, MakeFeedItemRequest } from "../shared/api.js"
import { FeedItem, Profile, asProfile } from "../shared/models.js"

import { DatabaseDAO } from './databaseDAO.js';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());                // JSON parsing middleware (for converting requests)
app.use(cookieParser());                // Cookie parsing middleware (for auth)
app.use(express.static(join(dirname(fileURLToPath(import.meta.url)), '../public')));    // Static page middleware

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let api = express.Router();
app.use(`/api`, api);



let dao: DAO = new DatabaseDAO();
dao.initialize();



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
  if (await dao.getUser(request.username) != null) {
    if (await dao.passwordIsCorrect(request.username,request.password)) {
      const auth: LoginResult = await dao.createAuth(request.username, request.password)
      setAuthData(res,auth)
      res.status(200).send(JSON.stringify(auth))
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
    console.log(dao.listAuths())
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

api.get('/content/profile', verifyAuth, async (req, res) => {
  
  let request: GetProfileRequest = req.body;

  let profile: Profile = await dao.getUser(request.fetchUsername);
  res.status(200).send(JSON.stringify(profile));
});

api.get('/content/feed', verifyAuth, async (req, res) => {
  let request: GetFeedRequest = req.body;
  let feed: Array<FeedItem> = await dao.getFeed();

  console.log(feed)

  res.status(200).send(JSON.stringify(feed));
})

api.post('/content/make', verifyAuth, async (req, res) => {

  console.log("posted make")

  let request: MakeFeedItemRequest = req.body;
  let success: boolean = await dao.createPost(request.feedItem);

  if (success) {
    res.status(200).send();
  } else {
    res.status(500).send();
  }
})

api.delete('/content/feed', async(req, res) => {
  await dao.clearFeed()
  res.status(200).send();
})