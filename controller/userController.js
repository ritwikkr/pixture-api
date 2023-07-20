import User from "../model/userSchema.js";

async function loginUser(req, res) {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
}

export { loginUser };
