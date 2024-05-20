const mongoose = require('mongoose');
const { Schema } = mongoose;


// Task Schema
const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 60
    },
    description: {
        type: String,
        required: false,
        maxlength: 400
    },
    completed: {
        type: Boolean,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export the Task model
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;