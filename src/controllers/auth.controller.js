const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");
const { hashPass } = require("../utils/password");

const signup = async (req, res) => {
    try{
        const {name, email, password} = req.body
        console.log(name,email,password)
        const existUser = await User.findOne({ email })
        if(existUser)
        return res.status(409).json({
            ok:false,
            msg:"User already exists"
        });
        const hashedPass = await hashPass(password)
        const newUser = await new User({name, email, password: hashedPass})

        /*there is one thing missing which is hassed password
        with the hassed password create new user
        and then the function i have generate token will work correctly */
        const {_id: id, role} = await new User({name, email, password}).save();
        const token = await generateToken({id, role})
             res.status(201).json({
                 ok:true,
                 msg:'User registered',
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
    //cuando tenemos los datos comprobar si tenemos el usuario con ese email
        // si encontramos usuaurio tendras que volver una repuesta que el usuario ya existe
        // si no existe que no esta registrado
        // encriptar contrasena con bcrypt y luego crear usuario
        // generar token y devolver este usuario con el token
const login = async (req,res) =>{
    try{
        const {email, password} = req.body
        console.log(email,password)
        const buscarUser = await User.findOne({ email })
        if (!buscarUser) 
            return res.status(404).json({
                ok:false,
                msg:'User or password not found'
    })
    //const passMatch = await hashPass({_id:id, role, password: hashPass})
        const passMatch = bcrypt.compare(password,buscarUser.password)
        if (!passMatch)
            return res.status(401).json(
            {
                ok:false,
                msg:'user or password not found'
            })
        const token = generateToken({id:buscarUser._id,role:buscarUser.role})
        return res.status(200).json({
            ok:true,
            msg:'login succesful',
            token,
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