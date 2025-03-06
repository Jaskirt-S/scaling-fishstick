const mongoose = require ("mongoose");
const chalk = require ("chalk");
const express =require ("express");
const backend = express();
const routes = require('./Routes/routes')
const cors = require('cors');
mongoose.connect("mongodb+srv://jaskiratsidhu57865786:5uMKXHAGxmQS7lEI@bickend.zabsb.mongodb.net/")
.then(()=>
console.log(`${chalk.green("v")} ${chalk.blue("MongoDB Connected!")}`)

)
.then(() => {
    const PORT = 5173;
    backend.listen(PORT, () => {
      console.log(
        `${chalk.green("✓")} ${chalk.blue(
          "Server Started on port"
        )} ${chalk.bgMagenta.white(PORT)}`
      );
    });
  })
  .catch((err) => console.log(err));
backend.use(cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  })
);
backend.use(routes);
