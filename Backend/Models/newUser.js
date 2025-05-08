  const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String,required:true},
  password: { type: String,required:true}, 
  role: { type: String,enum: ["user", "admin", "superAdmin"], default: "user" },
  name: {type:String ,required:true},
  class: {type:Number,required:true, validate: {validator: function(v) {return v < 13;},
  message: props => `${props.value} is not less than 13!`}},
  rollNo:{type:Number,required:true},
  leaves: [
    {
      from: Date,
      to: Date,
      reason: String
    }
  ]
}
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
