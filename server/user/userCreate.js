import userModel from "./userModel.js";

const userCreate = async (req, res) => {
  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    phone,
    brokerage,
  } = req.body;
  // Validation goes here
  const user = await userModel.create({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    phone,
    brokerage,
  });
  console.log("user", user);
  res.status(200).json({ success: true, user: user });
};

export default userCreate;
