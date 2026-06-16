import mongoose from "mongoose";
import {password} from "../../utils/password"
const userSchema = new mongoose.Schema({
    name:{type:String,
        required:true,
        maxLength: 30,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
      "It must be a valid email"
    ]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:8,
        maxLength:70
    },
    role:{
        type:String,
        required:true,
        trim:true,
        enum:["admin","user"],
        default:"user"
    },
    timestamps:true
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password"))
    return;
  try {
    this.password = await genHash(this.password);
  } catch (error) {
    throw error; 
  }
});

export default mongoose.model("User", userSchema)
