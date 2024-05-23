const sqlite3 = require('sqlite3').verbose();
const DB_PATHWAY = './datapath.sqlite3';

const db = new sqlite3.Database(DB_PATHWAY, (err) => {
    if (err) {
        console.error('Error accessing the database! :(', err.message);
    } else {
        console.log('Database successfully connected. :)');

        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid INTEGER NOT NULL UNIQUE,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Error creating users table', err.message);
            } else {
                console.log('Users table created or already exists.');
            }
        });
    }
});

module.exports = db;
