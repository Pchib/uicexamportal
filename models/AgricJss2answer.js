const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let answerjtwo1Schema = new Schema(
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
  { collection: "answerAJtwo1" }
);

let answerjtwo2Schema = new Schema(
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
  { collection: "answerAJtwo2" }
);

let answerjtwo3Schema = new Schema(
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
  { collection: "answerAJtwo3" }
);

const AnswerModeljtwo1 = mongoose.model("AnswerModeljtwo1", answerjtwo1Schema);
const AnswerModeljtwo2 = mongoose.model("AnswerModeljtwo2", answerjtwo2Schema);
const AnswerModeljtwo3 = mongoose.model("AnswerModeljtwo3", answerjtwo3Schema);

module.exports = {
  AnswerModeljtwo1,
  AnswerModeljtwo2,
  AnswerModeljtwo3,
};
