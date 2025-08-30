import userModel from "./userModel.js";

const userUpdate = async (req, res) => {
  const { id } = req.params;
  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    phone,
    brokerage,
  } = req.body;
  console.log(
    id,
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    phone,
    brokerage
  );
  // Validation goes here
  const user = await userModel.findOneAndUpdate(
    { _id: id },
    {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      phone,
      brokerage,
    }
  );
  console.log("user", user);
  res.status(200).json({ success: true, user: user });
};

export default userUpdate;
