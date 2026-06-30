const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");
const { hashPass } = require("../utils/password");

const signup = async (req, res) => {

    console.log("Sign up ", req.body)
     
    try{
        const {name, email, password} = req.body
        if (!name || !email || !password) {
        return res.status(400).json({
            ok: false,
            msg:"All fields are required"
      });
    }

        // console.log(name,email,password)
        const existUser = await User.findOne({ email })
        if(existUser)
        return res.status(409).json({
            ok:false,
            msg:"User already exists"
        });

        const hashedPass = await hashPass(password)
        const newUser = await new User({name, email, password: hashedPass}).save()


        const {_id: id, role} = await newUser
        const token = await generateToken({id, role})
             res.status(201).json({
                 ok:true,
                 msg:'User registered',
                 newUser,
                 token
            })
        }
        catch(error){
        console.log("Error:",error);
            res.status(500).json({
                 ok:false,
                msg:'error'
        });
    };
}
    
const login = async (req,res) =>{

    console.log("Log in", req.body)
    try{
        const {email, password} = req.body
        console.log(email,password)
        const user = await User.findOne({ email })
        if (!user) 
            return res.status(404).json({
                ok:false,
                msg:'User or password not found'
    })
    //const passMatch = await hashPass({_id:id, role, password: hashPass})
        const passMatch = await bcrypt.compare(password,user.password)
        if (!passMatch)
            return res.status(401).json(
            {
                ok:false,
                msg:'user or password not found'
            })
        const token = await generateToken({id:user._id,role:user.role})
        return res.status(200).json({
            ok:true,
            msg:'login succesful',
            // user,
            user: {
                _id: user._id, name: user.name, email: user.email, role: user.role
            },
            token
        })
    }
        catch(error){
        console.log(error)
            res.status(500).json({
                ok:false,
                msg:'error'
            })
        }
}
module.exports={signup,login}

//cuando tenemos los datos comprobar si tenemos el usuario con ese email
        // si encontramos usuaurio tendras que volver una repuesta que el usuario ya existe
        // si no existe que no esta registrado
        // encriptar contrasena con bcrypt y luego crear usuario
        // generar token y devolver este usuario con el token