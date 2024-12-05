const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const COOKIE_SECRET = process.env.COOKIE_SECRET;
const session = require('express-session');
const noob_helper = require("./noob_helper.js")
app.use(express.static('public'));



app.use(session({
    secret: COOKIE_SECRET, // Cambia esto por una cadena segura
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Cambia a true si usas HTTPS
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(noob_helper)

const users = require('./routes/users');
app.use("/api/", users);

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/public/home.html');
})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    });