import userModel from "./userModel.js";

const userGetMany = async (req, res) => {
  const { email } = req.params;
  console.log("email", email)
  if (email) {
    console.log("if email")
    // const users = await userModel.find({ address: { city: email } });
    const users = await userModel.find({ "email": email });
    res.status(200).json({ success: true, users: users });
  } else {
    console.log("else email")
    const users = await userModel.find();
    console.log("users", users);
    res.status(200).json({ success: true, users: users });
  }
};

export default userGetMany;
