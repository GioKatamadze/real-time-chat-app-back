import Express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  getAllUsers,
} from "../controllers/userController.js";

const userRouter = Express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", getUserProfile);
userRouter.get("/users", getAllUsers);

export default userRouter;
