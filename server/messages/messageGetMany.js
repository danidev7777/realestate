import messageModel from "./messageModel.js";

const messageGetMany = async (req, res) => {
 

    const messages = await messageModel.find();
    console.log("messages", messages);
    res.status(200).json({ success: true, messages: messages });
  
};

export default messageGetMany;
