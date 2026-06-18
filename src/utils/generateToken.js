const jwt = require("jsonwebtoken");
//const SECRET_TOKEN = process.env.SECRET_TOKEN;

const generateToken = (payload) => {
  //console.log(SECRET_TOKEN)
  return jwt.sign(payload, process.env.SECRET_TOKEN, { expiresIn: "2d", "algorithm": "HS256" });
};
const checkToken = async (token) => {
  try {
    return await jwt.verify(token, process.env.SECRET_TOKEN)
  } catch (error) {
    throw error;
  }
};
module.exports= {generateToken,checkToken}


