const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define user groups
const groupSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;