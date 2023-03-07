import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema({
  content: {
    type: Schema.Types.String,
    required: true,
  },
  chatroomId: {
    type: Schema.Types.Number,
    required: true,
  },
  userId: {
    type: Schema.Types.Number,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
