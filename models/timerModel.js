const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

let timerSchema = new Schema({
  user_id: {
    type: ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  time: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Timer = mongoose.model("Timer", timerSchema);
module.exports = Timer;
