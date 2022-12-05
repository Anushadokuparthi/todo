require("dotenv").config();
const express = require("express")
const connectToDB = require("./config/db");
const todoRoutes = require("./router/todoRoutes");
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const ejs = require('ejs');
// app.set('view engine', 'ejs');
// app.use(express.static('public'))

connectToDB();
app.use("/", todoRoutes);

module.exports = app;