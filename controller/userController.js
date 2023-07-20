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

    // Checking if user is registered
    const data = await User.findOne({ email });
    if (!data) {
      return res.status(400).json("Email Not Present. Please register");
    }

    // Checking if password is correct
    const isPasswordCorrect = await data.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(400).json("Incorrect email or password");
    }

    data.password = undefined;
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

export { loginUser, registerUser };
