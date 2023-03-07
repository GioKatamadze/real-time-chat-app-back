import express from "express";
import addMessage from "../controllers/messageController";

const messageRouter = express.Router();

messageRouter.post("/message", addMessage);

export default messageRouter;
