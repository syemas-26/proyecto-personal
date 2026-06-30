const bcrypt = require("bcryptjs")

const hashPass = async password => {
  try {
    return await bcrypt.hash(password, 12);
  } catch (error) {
    throw error;
  }
};

const compareHash = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw error;
  }
}
module.exports = {hashPass,compareHash}