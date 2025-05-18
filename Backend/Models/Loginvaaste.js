const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  token:{type: String, required: true}
});

const Logiin = mongoose.model("Loginsession", UserSchema);
module.exports = Logiin;   
