require('dotenv').config();
const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;


module.exports = connectToDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Sucessful connection to DB');
    } catch (err) {
        console.log('Failed to connect to DB', err);
        process.exit(1);
    }
};

