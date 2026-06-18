const { checkToken, generateToken } = require("../utils/generateToken");

const validToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "Token not sent"
      });
    }

    const result = await checkToken(token);
    req.id = result.id;
    req.role = result.role;

    const newToken = await generateToken({ id: result.id, role: result.role });
    req.token = newToken
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: error.message || "Error in the token"
    });
  }
}
module.exports={validToken}