const express = require('express');
const connectToDB = require('./Config/mongoConfig.js');
const apiRouter = require('./api/routes/api.js');
const checkApiKey = require('./api/middleware/checkApiKey.js');
const PORT = 3000;

// Make Express app
const app = express();

// Middleware
app.use(express.json());
app.use(checkApiKey);


// Attempt connection to db
connectToDB();

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})