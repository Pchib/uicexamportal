const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const random = require("mongoose-simple-random");

let examTypejthree1Schema = new Schema(
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
  { collection: "agricJthree1" }
);

let examTypejthree2Schema = new Schema(
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
  { collection: "agricJthree2" }
);

let examTypejthree3Schema = new Schema(
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
  { collection: "agricJthree3" }
);

examTypejthree1Schema.plugin(random);
examTypejthree2Schema.plugin(random);
examTypejthree3Schema.plugin(random);

const ExamModeljthree1 = mongoose.model("ExamModeljthree1", examTypejthree1Schema);
const ExamModeljthree2 = mongoose.model("ExamModeljthree2", examTypejthree2Schema);
const ExamModeljthree3 = mongoose.model("ExamModeljthree3", examTypejthree3Schema);


module.exports = {
  ExamModeljthree1,
  ExamModeljthree2,
  ExamModeljthree3
};
