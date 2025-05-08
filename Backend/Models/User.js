  const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String,},
  password: { type: String,}, 
  role: { type: String,enum: ["user", "admin", "superAdmin"], default: "user" },
  name: {String},
  class: {String},
  rollNo:{Number},
  leaves: [
    {
      fromDate: Date,
      toDate:Date,
      reason: String
    }
  ]
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
