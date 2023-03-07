import mongoose from "mongoose";

const { Schema } = mongoose;

const chatroomSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
    required: true,
  },
});

const ChatRoom = mongoose.model("ChatRoom", chatroomSchema);

export default ChatRoom;
