import {User} from "../models/User.model"

export const login = async (req,res) =>{
    try{
        const {email, pasword} = req.body;
        const user = await User.findOne({ email }).select("password role");
            if (!user)
              return res.status(404).json({
                ok: false,
                msg: "Nonexistent user"
              });
            if (!await user.comparePassword(password))
              return res.status(401).json({
                ok: false,
                msg: "Incorrect password"
              });
   
    const token = await generarToken({ id: user._id, rol: user.role });
    
        res.status(200).json({
          ok: true,
          token
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          ok: false,
          msg: "Internal server error"
        });
      }
}
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (await User.exists({ email }))
      return res.status(409).json({
        ok: false,
        msg: "Email already registered. Use 'forgot password' if you've forgotten it."
      });

    const { _id: id, rol } = await new User({ name, email, password }).save();

    const token = await generarToken({ id, rol });

    res.status(201).json({
      ok: true,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Internal server error"
    });
  }
};

