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

// Model function to log in an existing user
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

// Model function to retrieve users
const getAllUsers = async () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users`;
        db.all(sql, [], (err, users) => {
            if (err) {
                reject(err);
            } else {
                resolve(users);
            }
        });
    });
};

module.exports = { createUser, getUserByUsername, getAllUsers };
