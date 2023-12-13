const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let timerSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
