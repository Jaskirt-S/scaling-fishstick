const mongoose = require ("mongoose");
const chalk = require ("chalk");
const express =require ("express");
const backend = express();
const Loginroute = require('./routes/Login')
const Admission = require('./routes/Admission')
const cors = require('cors');

backend.use(cors({
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
})
);
backend.use(express.json());



mongoose.connect("mongodb+srv://jaskiratsidhu57865786:5uMKXHAGxmQS7lEI@bickend.zabsb.mongodb.net/")
.then(()=>
  {
    console.log(`${chalk.green("v")} ${chalk.blue("MongoDB Connected!")}`)
    const PORT = 5000;
    backend.listen(PORT, () => 
      {
        console.log(`${chalk.green("✓")} ${chalk.blue("Server Started on port")} ${chalk.bgMagenta.white(PORT)}`);
      });
  
  })
  .catch((err) => console.log(err));




backend.get("/getData",(req,res)=>{
  res.send("Hello");
})


backend.use("/login", Loginroute);
backend.use("/Admission", Admission)
