const express = require('express');
const apiRouter = express.Router();
const userRouter = require('../controllers/user.js'); //

// Connect all api endpoints
apiRouter.use('/user', userRouter);
// apiRouter.use('/group', groupRouter);
// apiRouter.use('/task', taskRouter)

module.exports = apiRouter;