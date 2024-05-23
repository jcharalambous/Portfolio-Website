const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { escape, isUUID, isEmail } = require('validator');

// Function to create a new user
const handleSignUp = async (req, res) => {
    try {
        let { uuid, username, password } = req.body;

        // Sanitize input
        uuid = escape(uuid);
        username = escape(username);
        password = escape(password);

        // Validate input
        if (!isUUID(uuid)) {
            return res.status(400).json({ error: 'Invalid UUID' });
        }
        if (!isEmail(username)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.createUser({ uuid, username, password: hashedPassword });
        const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User created', token });
    } catch (error) {
        if (error.message.includes('SQLITE_CONSTRAINT: UNIQUE constraint failed')) {
            res.status(409).json({ error: 'User with this UUID or username already exists' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = { handleSignUp };
