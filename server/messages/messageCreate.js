import messageModel from "./messageModel.js";

const messageCreate = async (req, res) => {
  const {
    realtor,
    property,
    message,
    buyerEmail,
  } = req.body;
  // Validation goes here
  const newMessage = await messageModel.create({
    realtor,
    property,
    message,
    buyerEmail,
  });
  console.log("message", newMessage);
  res.status(200).json({ success: true, message: newMessage });
};

export default messageCreate;
