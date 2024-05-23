const db = require('../database/db');

// Model function for new user
const createUser = (user) => {
    return new Promise((resolve, reject) => {
        const { uuid, username, password } = user;
        db.run(`INSERT INTO users (uuid, username, password) VALUES (?, ?, ?)`,
            [uuid, username, password],
            function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({ id: this.lastID });
            });
    });
};

module.exports = { createUser };
