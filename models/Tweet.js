const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date_created: { type: Date, default: Date.now },
  likes: Number,
});

module.exports = tweetSchema;
