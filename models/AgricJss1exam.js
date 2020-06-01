const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const random = require("mongoose-simple-random");

let examTypejone1Schema = new Schema(
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
  { collection: "agricJone1" }
);

let examTypejone2Schema = new Schema(
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
  { collection: "agricJone2" }
);

let examTypejone3Schema = new Schema(
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
  { collection: "agricJone3" }
);

examTypejone1Schema.plugin(random);
examTypejone2Schema.plugin(random);
examTypejone3Schema.plugin(random);

const ExamModeljone1 = mongoose.model("ExamModeljone1", examTypejone1Schema);
const ExamModeljone2 = mongoose.model("ExamModeljone2", examTypejone2Schema);
const ExamModeljone3 = mongoose.model("ExamModeljone3", examTypejone3Schema);


module.exports = {
  ExamModeljone1,
  ExamModeljone2,
  ExamModeljone3
};
