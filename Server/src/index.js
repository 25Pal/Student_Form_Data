const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const app = express();
require("dotenv").config();
const route= require('./route/routes')
const PORT = process.env.port ;

app.use(cors());

app.use(express.json());
app.use("/",route)
mongoose.connect(process.env.MongoUrl ,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log("DataBase Connected Succesfully !");
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})
