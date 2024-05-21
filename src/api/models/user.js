const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;


// Defining User Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlenth: 6
    }
});

// Hashing function for safe password storage
userSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        // Hash password on edit or first create
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (err) {
        next(err);
    }
});

// Create and export User Model
const User = mongoose.model('User', userSchema);
module.exports = User;