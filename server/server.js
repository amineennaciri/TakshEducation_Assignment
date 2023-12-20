const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const cors = require('cors');
const mainRoutes = require('./routes/main');


const app = express();

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// Option 1: Allow all Origins with Default of cors(*);
app.use(cors());
// Option 2: Allow custom Origins;
/* app.use(cors({
    origins:'http:localhost:3000',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
})); */

app.use("/", mainRoutes);

connectDB().then(()=>{
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    });
})