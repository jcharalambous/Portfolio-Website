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

const getUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(row);
        });
    });
};

module.exports = { createUser, getUserByUsername };
