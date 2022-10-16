const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const users = require('./users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/all-users', (req, res) => {
  return res.json(users);
});

app.post('/register', (req, res) => {
  const user = req.body;
  users.push(user);
  return res.json(user);
});

app.post('/login', (req, res) => {
  const body = req.body;

  const user = users.find((user) => user.email === body.email);
  const password = req.body.password;

  if (!user) {
    return res.json(`User not found with email: ${body.email}`);
  }
  if (user.password !== password) {
    return res.json('User password not correct');
  }
  return res.json(user);
});

app.post('/add-user-info', (req, res) => {
  const { email, ...info } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.json(`User not found with email: ${email}`);
  }

  user.data = { ...info };
  user.admin = false;
  return res.json(user);
});

app.post('/update-user-info', (req, res) => {
  const { email, admin, ...info } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.json(`User not found with email: ${email}`);
  }

  user.data = info;
  user.admin = admin;
  return res.json(user);
});

app.post('/delete-user', (req, res) => {
  const email = req.body.email;
  const index = users.findIndex((user) => user.email === email);

  if (!index) {
    return res.json(`User not found with email: ${email}`);
  }
  users.splice(index, 1);
  return res.json(`User removed by email: ${email}`);
});

app.post('/change-password', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const index = users.findIndex((user) => user.email === email);

  if (!index) {
    return res.json(`User not found with email: ${email}`);
  }
  users[index].password = password;
  return res.json('Password changed');
});

app.listen(port, () => {
  console.log(`Server listening on the port: ${port}`);
});
