const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

import { User } from "../shared/models"
import { DAO, RegisterRequest } from "./DAO"
import { MemoryDAO } from "./memoryDAO" 

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


let api = express.Router();
app.use(`/api`, api);

let dao: DAO = new MemoryDAO();

api.post('/user/register', async (req: RegisterRequest, res) => {
  if (await dao.getUser(req.username)) {
     res.status(409).send({ msg: 'Existing user' });
  } else {
    const user: User = await dao.createUser(req.username, req.password, req.phoneNumber);
  }
});

