const express = require('express');
const bodyParser = require('body-parser');
const mealRoutes = require('./routes/meals');
const db = require('./DataBase/db');

const app = express();

app.use(bodyParser.json());

db().then(() => console.log('Db connected'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', mealRoutes)

app.listen(8080)