import express from "express";
import addMessage from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.post("/message", addMessage);

export default messageRouter;
