const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors')
const knex = require('knex');
const bcrypt = require('bcrypt');

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const database = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : '',
    password : '',
    database : 'smart-brain'
  }
});

const app = express();

app.use(bodyparser.json());
app.use(cors());

app.post('/signin', (req, res) => {signin.handleSignin(req, res, database, bcrypt)})

app.post('/register', (req, res) => {register.handleRegister(req, res, database, bcrypt)})

app.get('/profile/:id', (req, res) => {profile.handleProfile(req,res, database)})

app.put('/image', (req, res) => {image.handleImage(req,res, database)}) 


app.listen(3000, () => {
	console.log('app is 3000 port');
})






