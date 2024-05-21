const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('This is the endpoint for user shit! The thing is recieved in controllers');
});

userRouter.post('/create', (req, res) => {
    const reqBody = req.body;
    const reqValid = true;

    if (reqValid) {
        // Send to services to create user
        res.send('User Created');
    } else {
        // Send response to indicate issue
        res.send('User Not Created');
    }
    console.log('Date recieved Was: ', reqBody);
});

module.exports = userRouter;