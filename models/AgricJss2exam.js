const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const random = require("mongoose-simple-random");

let examTypejtwo1Schema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    question: {
      caption: String,
      options: [{ type: String }],
    },
    answer: String,
  },
  { collection: "agricJtwo1" }
);

let examTypejtwo2Schema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    question: {
      caption: { type: String },
      url: { type: String },
      options: [{ type: String }],
    },
    answer: String,
  },
  { collection: "agricJtwo2" }
);

let examTypejtwo3Schema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    question: {
      caption: { type: String },
      url: { type: String },
    },
    answer: String,
  },
  { collection: "agricJtwo3" }
);

examTypejtwo1Schema.plugin(random);
examTypejtwo2Schema.plugin(random);
examTypejtwo3Schema.plugin(random);

const ExamModeljtwo1 = mongoose.model("ExamModeljtwo1", examTypejtwo1Schema);
const ExamModeljtwo2 = mongoose.model("ExamModeljtwo2", examTypejtwo2Schema);
const ExamModeljtwo3 = mongoose.model("ExamModeljtwo3", examTypejtwo3Schema);


module.exports = {
  ExamModeljtwo1,
  ExamModeljtwo2,
  ExamModeljtwo3
};
