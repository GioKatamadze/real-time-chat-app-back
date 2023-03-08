import express from "express";
// import {
//   getAllChatrooms,
//   getSingleChatroom,
// } from "../controllers/chatroomcontroller.js";

const chatroomRouter = express.Router();

// chatroomRouter.get("/chatrooms", getAllChatrooms);
// chatroomRouter.get("/chatrooms/:id", getSingleChatroom);

chatroomRouter.get("/chatrooms", async (_, res) => {
  const data = await ChatRoom.find();
  const newData = data.map((chatroom) => {
    return {
      id: chatroom.id,
      title: chatroom.title,
    };
  });
  return res.json(newData);
});

chatroomRouter.get("/chatrooms/:id", async (req, res) => {
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
});

export default chatroomRouter;
