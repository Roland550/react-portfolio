const dotenv = require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express()

const PORT = process.env.PORT || 5000;

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyparser.json())

//Routes 
app.get("/", (req, res) => {
    res.send("Home Page");
})

// Conect to DB and start serveer

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
        console.log('Server Running on port',+ PORT)
    }) 
  })
  .catch((err) => console.log(err))