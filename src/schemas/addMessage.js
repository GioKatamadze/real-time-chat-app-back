import Joi from "joi";
import ChatRoom from "../models/chatRoomModel.js";
import User from "../models/userModel.js";

// const determineIfUserExist = (user) => (value, helpers) => {
//   if (!user) {
//     return helpers.messages("There is no user with this ID");
//   }
//   return value;
// };

const determineIfChatroomExist = (chatroom) => (value, helpers) => {
  if (!chatroom) {
    return helpers.messages("There is no chatroom with this ID");
  }
  return value;
};

const addMessageSchema = async (data) => {
  const user = await User.findOne({ _id: data.userId });
  const chatroom = await ChatRoom.findOne({ id: data.chatroomId });
  return Joi.object({
    content: Joi.string().min(4).required().messages({
      "string.base": "content should be a string",
      "string.min": "content should include 4 characters or more",
      "any.required": "content is required",
    }),
    chatroomId: Joi.number()
      .custom(determineIfChatroomExist(chatroom))
      .required()
      .messages({
        "number.base": "chatroom id should be a number",
        "any.required": "chatroom id is required",
      }),
    userId: Joi.string()
      // .custom(determineIfUserExist(user))
      .required()
      .messages({
        // "number.base": "user id should be a number",
        "any.required": "user id is required",
      }),
  });
};

export default addMessageSchema;
