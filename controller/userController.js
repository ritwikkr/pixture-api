import User from "../model/userSchema.js";

async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    // Missing Value Checking
    if (!name || !email || !password) {
      return res.status(400).json("Please provide all values");
    }

    // Checking Email Already Exist
    const isEmailAlreadyPresent = await User.findOne({ email });
    if (isEmailAlreadyPresent) {
      return res.status(400).json("Email Already Exist. Please try loging in");
    }

    const data = await User.create({ name, email, password });
    data.password = undefined;
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    // Missing Value Checking
    if (!email || !password) {
      return res.status(400).json("Please provide all values");
    }
  } catch (error) {
    console.log(error);
  }
}

export { loginUser, registerUser };
