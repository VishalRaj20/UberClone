const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const userRoutes = require('./routes/user.routes.js');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes.js');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;