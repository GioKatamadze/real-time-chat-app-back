import Express from "express";
import {
  getAllChatrooms,
  getSingleChatroom,
} from "../controllers/Feedback-controller.js";

const chatroomRouter = Express.Router();

chatroomRouter.get("/chatrooms", getAllChatrooms);
chatroomRouter.get("/chatrooms/:id", getSingleChatroom);

export default chatroomRouter;
