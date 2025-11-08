import cookieParser from 'cookie-parser';
import express from 'express';


const app = express();

import { join, dirname } from "path"
import { fileURLToPath } from 'url'
import { DAO } from "./DAO.js"
import { LoginRequest, RegisterRequest, AuthData, AuthToken, LogoutRequest, RegisterResult, LoginResult } from "../shared/api.js"

import { MemoryDAO } from "./memoryDAO.js" 

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());                // JSON parsing middleware (for converting requests)
app.use(cookieParser());                // Cookie parsing middleware (for auth)
app.use(express.static(join(dirname(fileURLToPath(import.meta.url)), '../public')));    // Static page middleware

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let api = express.Router();
app.use(`/api`, api);

let dao: DAO = new MemoryDAO();

api.post('/user/register', async (req, res) => {
  const request: RegisterRequest = req.body;
  if (await dao.getUser(request.username) != null) {
    res.status(409).send({ msg: 'Existing user' });
    console.log("attempted re-registering: " + request.username)
  } else {
    await dao.createUser(request.username, request.password, request.displayName);
    const auth: RegisterResult = await dao.createAuth(request.username,request.password);
    res.status(200).send(JSON.stringify(auth));
    console.log("user registered: " + request.username)
  }
});

api.post('/user/login', async (req, res) => {
  const request: LoginRequest = req.body;
  if (await dao.getUser(request.username) != null) {
    if (await dao.passwordIsCorrect(request.username,request.password)) {
      const auth: LoginResult = await dao.createAuth(request.username, request.password)
      res.status(200).send(JSON.stringify(auth))
      console.log("logged in: " + request.username)
    } else {
      res.status(400).send({ msg: 'incorrect password' })
      console.log("wrong password: " + request.username)
    }
  } else {
    console.log("failed login: " + request.username)
    res.status(400).send({ msg: 'not registered' })
  }
});

api.delete('/user/logout', async (req, res) => {
  let request: LogoutRequest = req.body;
  if (await dao.authIsValid(request.authToken)) {
    dao.deleteAuth(request.authToken);
    res.status(200).send({ msg: 'Logout successful' });
    console.log("logged out auth session: " + request.authToken)
  } else {
    res.status(400).send({ msg: 'AuthToken not valid' });
    console.log("failed to log out auth session: " + request.authToken)
  }
});