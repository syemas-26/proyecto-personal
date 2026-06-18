const mongoose = require("mongoose");
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
    }
},
    {timestamps:true}
);

module.exports = mongoose.model("User", userSchema)
