import Message from "../models/messageModel.js";
import addMessageSchema from "../schemas/addMessage.js";

const addMessage = async (req, res) => {
  const { body } = req;

  const validator = await addMessageSchema(body);
  const { value: data, error } = validator.validate(body);
  if (error) {
    return res.status(401).json(error.details);
  }
  const { content, chatroomId, userId } = data;

  const lastMessage = await Message.find().sort({ _id: -1 }).limit(1);
  const id = lastMessage.length > 0 ? lastMessage[0].id + 1 : 1;
  const newMessage = {
    content,
    chatroomId,
    userId,
    id,
  };

  await Message.create({ ...newMessage });
  return res.status(201).json({ ...newMessage });
};

export default addMessage;
