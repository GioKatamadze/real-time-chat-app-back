import Message from "../models/messageModel.js";
import ChatRoom from "../models/chatRoomModel.js";

export const getAllChatrooms = async (_, res) => {
  const data = await ChatRoom.find();
  const newData = data.map((chatroom) => {
    return {
      id: chatroom.id,
      title: chatroom.title,
    };
  });
  return res.json(newData);
};

export const getSingleChatroom = async (req, res) => {
  const { id } = req.params;
  const chatroom = await ChatRoom.findOne({ id: +id });
  if (!chatroom) {
    return res
      .status(401)
      .json({ message: "There is no chatroom with this id" });
  }
  const messages = await Message.find({ chatroomId: +id });
  const newMessages = messages.map((message) => {
    return {
      content: message.content,
      chatroomId: message.chatroomId,
      userId: message.userId,
      id: message.id,
    };
  });
  const newChatroom = {
    title: chatroom.title,
    id: chatroom.id,
    messages: newMessages,
  };
  return res.status(200).json(newChatroom);
};
