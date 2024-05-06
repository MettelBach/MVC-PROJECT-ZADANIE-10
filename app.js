require("dotenv").config();

const express = require("express"),
      expressLayout = require("express-ejs-layouts"),
      connectDB = require("./server/config/db"),
      flash = require("connect-flash"),
      session = require("express-session"),
      methodOverride = require("method-override");

const app = express(),
      PORT = 3000 || process.env.PORT;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Static files
app.use(express.static('public'));

// Express session
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        }
    })
);

// Flash
app.use(flash({ sessionKeyName: 'flashMessage' }));

// Template engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use("/", require("./server/routes/book"));

app.get("*", (req,res) => {
    res.status(404).render("404");
});

app.listen(PORT, () => {
    console.log("App's listening on port " + PORT);
});