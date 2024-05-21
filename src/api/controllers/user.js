const express = require('express');
const userCreate = require('../services/userCreate');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('This is the endpoint for user shit! The thing is recieved in controllers');
});

userRouter.post('/create', (req, res) => {
    // Validate somthing before creating user
    userCreate(req, res);
});

module.exports = userRouter;