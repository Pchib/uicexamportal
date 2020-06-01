const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let answerjthree1Schema = new Schema(
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
  { collection: "answerAJthree1" }
);

let answerjthree2Schema = new Schema(
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
  { collection: "answerAJthree2" }
);

let answerjthree3Schema = new Schema(
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
  { collection: "answerAJthree3" }
);

const AnswerModeljthree1 = mongoose.model("AnswerModeljthree1", answerjthree1Schema);
const AnswerModeljthree2 = mongoose.model("AnswerModeljthree2", answerjthree2Schema);
const AnswerModeljthree3 = mongoose.model("AnswerModeljthree3", answerjthree3Schema);

module.exports = {
  AnswerModeljthree1,
  AnswerModeljthree2,
  AnswerModeljthree3,
};
