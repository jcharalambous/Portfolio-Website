require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 1000;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());

app.get('/example-endpoint', (req, res) => {
    res.json({ message: `Hello, from the server! ${process.env.SECRET_KEY}` });
});

app.listen(PORT, () => {
    console.log(`Sever is running on ${PORT} `);
});
