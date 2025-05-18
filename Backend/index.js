const mongoose = require ("mongoose");
const chalk = require ("chalk");
const express =require ("express");
const backend = express();
const Loginroute = require('./routes/Login')
const Admission = require('./routes/Admission')
const Register = require('./routes/Register')
const Fpassword =require('./routes/forgotpassword')
const Leave = require("./routes/Leave")
const Verify=require("./routes/verify")
const Event=require('./routes/addEvent')
const Revent=require('./routes/Revent')
const Evento =require('./routes/Evento')
const cors = require('cors');
const Server=require("./mongoserver")


backend.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
}));


backend.use(express.json());




mongoose.connect(Server)
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

// Route middlewares
backend.use("/login", Loginroute);
backend.use("/Admission", Admission);
backend.use("/register", Register);
backend.use("/forgot-password", Fpassword);
backend.use("/leave", Leave);
backend.use("/verify", Verify);
backend.use("/event", Event);
backend.use("/revent", Revent);
backend.use("/evento", Evento);
backend.use("/getData", (req, res) => {
  res.send("Hello");
})
backend.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
