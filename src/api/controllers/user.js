const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('This is the endpoint for user shit! The thing is recieved in controllers');
});

userRouter.post('/create', (req, res) => {
    const reqBody = req.body;
    res.send(reqBody);
    console.log('Date recieved: ', reqBody);
});

module.exports = userRouter;