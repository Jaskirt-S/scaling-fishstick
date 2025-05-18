  const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String,},
  password: { type: String,},
  name: {String},
  class: {String},
  rollNo:{Number},
  role: { type: String,enum: ["user", "admin", "superAdmin"], default: "user" },
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
