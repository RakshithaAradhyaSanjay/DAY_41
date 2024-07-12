const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");
const { connect } = require('mongoose');


//load the env from the .env files
dotenv.config();

connectDB();

const app = express();

app.use(bodyParser.json())
app.use("/items",itemRoutes)

const PORT = process.env.PORT || 6555;
app.listen(PORT,()=> {
    console.log("server is running")
}) 