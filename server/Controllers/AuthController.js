import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

//registering new user
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);

  const hashedPass = await bcrypt.hash(password, salt);
  req.body.password = hashedPass;

  const newUser = new UserModel(req.body);
  const { username } = req.body;

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login user

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json(user)
        : res.status(400).json("wrong Password");
    } else {
      res.status(404).json("user does not exit");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
