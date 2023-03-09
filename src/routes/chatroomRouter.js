import express from "express";
import {
  getAllChatrooms,
  getSingleChatroom,
} from "../controllers/chatroomController.js";

const chatroomRouter = express.Router();

chatroomRouter.get("/chatrooms", getAllChatrooms);
chatroomRouter.get("/chatrooms/:id", getSingleChatroom);

export default chatroomRouter;
