const mongoose = require ("mongoose");
const chalk = require ("chalk");
const express =require ("express");
const backend= express();
mongoose.connect("mongodb+srv://jaskiratsidhu57865786:5uMKXHAGxmQS7lEI@bickend.zabsb.mongodb.net/")

.then(()=>
console.log(`${chalk.green("v")} ${chalk.blue("MongoDB Connected!")}`)

)