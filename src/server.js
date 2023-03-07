import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";

import userRouter from "./routes/userRouter.js";
import messageRouter from "./routes/messageRouter.js";
import chatroomRouter from "./routes/chatroomRouter.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", cors(), chatroomRouter);
app.use("/api", cors(), messageRouter);
app.use("/api", cors(), userRouter);
app.use("/", cors(), ...swaggerMiddleware());

app.listen(process.env.PORT || 5000);
