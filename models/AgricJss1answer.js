const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let answerjone1Schema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      require: true,
    },
    type: {
      type: Number,
      require: true,
    },
    score: {
      type: Number,
      require: true,
    },
    answer: String,
  },
  { collection: "answerAJone1" }
);

let answerjone2Schema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      require: true,
    },
    type: {
      type: Number,
      require: true,
    },
    score: {
      type: Number,
      require: true,
    },
    answer: String,
  },
  { collection: "answerAJone2" }
);

let answerjone3Schema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      require: true,
    },
    type: {
      type: Number,
      require: true,
    },
    score: {
      type: Number,
      require: true,
    },
    answer: String,
  },
  { collection: "answerAJone3" }
);

const AnswerModeljone1 = mongoose.model("AnswerModeljone1", answerjone1Schema);
const AnswerModeljone2 = mongoose.model("AnswerModeljone2", answerjone2Schema);
const AnswerModeljone3 = mongoose.model("AnswerModeljone3", answerjone3Schema);

module.exports = {
  AnswerModeljone1,
  AnswerModeljone2,
  AnswerModeljone3,
};
