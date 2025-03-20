const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  mobileNo: { type: Number, required: true }, 
  Age:{type:Number,required:true},
  class:{type:String,required:true},
  remarks:{type:String,required:false}
});

const Admission = mongoose.model("admissions", UserSchema);
module.exports = Admission;