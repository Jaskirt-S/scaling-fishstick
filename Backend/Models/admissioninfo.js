const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  Mno: { type: Number, required: true }, 
  Age:{type:Number,required:true},
  Class:{type:String,required:true},
  remarks:{type:String,required:false}
},{
  timestamps:true
});

const Admission = mongoose.model("admissions", UserSchema);
module.exports = Admission;