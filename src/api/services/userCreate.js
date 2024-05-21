const User = require('../models/user.js');

module.exports = userCreate = async (req, res) => {
    try {
        const { name, password } = req.body;
        const newUser = new User({ name, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};