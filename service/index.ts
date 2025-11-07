import cookieParser from 'cookie-parser';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import express from 'express';


const app = express();

import type { DAO, LoginRequest, RegisterRequest, AuthData, AuthToken, LogoutRequest } from "./DAO.ts"

import { User } from "../shared/models.ts"
import { MemoryDAO } from "./memoryDAO.ts" 

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());                // JSON parsing middleware (for converting requests)
app.use(cookieParser());                // Cookie parsing middleware (for auth)
app.use(express.static('./public'));    // Static page middleware

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let api = express.Router();
app.use(`/api`, api);

let dao: DAO = new MemoryDAO();

api.post('/user/register', async (req, res) => {
  let request: RegisterRequest = req.body;
  if (await dao.getUser(request.username) != null) {
    res.status(409).send({ msg: 'Existing user' });
    console.log("attempted re-registering: " + request.username)
  } else {
    const user: User = await dao.createUser(request.username, request.password, request.phoneNumber);
    const auth: AuthData = await dao.createAuth(request.username,request.password);
    console.log("user registered: " + user.username)
    res.status(200).send(JSON.stringify(auth));
  }
});

api.delete('/user/logout', async (req, res) => {
  let request: LogoutRequest = req.body;
  console.log('we saw something')
  if (await dao.authIsValid(request.authToken)) {
    console.log(dao.authIsValid(request.authToken))
    dao.deleteAuth(request.authToken);
    console.log(dao.authIsValid(request.authToken))
    res.status(200).send({ msg: 'Logout successful' });
  } else {
    res.status(400).send({ msg: 'AuthToken not valid' });
  }
});

api.post('/user/login', async (req: LoginRequest, res) => {

});