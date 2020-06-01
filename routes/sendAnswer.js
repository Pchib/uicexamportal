const config = require("../config/config");
const answers = require("../models/answers");
const AgricJss1answer = require("../models/AgricJss1answer");
const AgricJss2answer = require("../models/AgricJss2answer");
const AgricJss3answer = require("../models/AgricJss3answer");
const { mailer, mailer2 } = require("./mailer");
const nodemailer = require("nodemailer");

const mongoose = require("mongoose");
mongoose.set("debug", true);

function sendAnswer(req, res) {
  // query answers
  const examData = req.body.questionPayload;

  console.log(req.body);
  console.log(req.body.user.Class);
  console.log(req.body.user.subject);

  console.log(req.body.user.email);
  console.log(req.body.user.name);
  let subject = req.body.user.subject;
  let Class = req.body.user.Class;
  let email = req.body.user.email;
  let name = req.body.user.name;
  console.log("...........................");
  if (subject === "Agriculture" && Class === "Jss 1") {
    console.log(examData);

    let score = 0;
    let examAnswerArr = [];
    let Info = [];
    let promises = [];
    examque = [];
    examanswer = [];

    Object.keys(examData).map((sectionKey) => {
      const id = parseInt(sectionKey.substring(7));
      const answerkey = "AnswerModeljone" + id;
      const AnswerModel = AgricJss1answer[answerkey];

      examData[sectionKey].forEach((item, index) => {
        examAnswerArr.push(item.answer);
        examque.push(
          `<p>${1 + index}.                    ${item.question.caption}</p>`
        );
        let query = { id: item.id, type: item.type };
        const promise = AnswerModel.find(query).exec();
        promises.push(promise);
      });
    });
    console.log(examAnswerArr);
    console.log("======11111" + promises);
    Promise.all(promises)
      .then((docs) => {
        examAnswerArr.map((item, index) => {
          if (item === docs[index][0].answer) score += docs[index][0].score;
          examanswer.push(
            `<p>${1 + index}.                       ${
              docs[index][0].answer
            }</p>`
          );
        });
        res.send({
          score: score,
          status: true,
        });
        if (score > 4) {
          mailer(email, name, examque, examanswer, score, subject, Class);
        } else if (score < 5) {
          mailer2(email, name, examque, examanswer, score, subject, Class);
        }
      })
      .catch((err) => {
        console.log(err);
        res.send({
          err: "Error in processing DB ",
          status: false,
        });
      });
  }
  console.log("...........................");
  if (subject === "Agriculture" && Class === "Jss 2") {
    console.log(examData);

    let score = 0;
    let examAnswerArr = [];
    let Info = [];
    let promises = [];
    examque = [];
    examanswer = [];

    Object.keys(examData).map((sectionKey) => {
      const id = parseInt(sectionKey.substring(7));
      const answerkey = "AnswerModeljtwo" + id;
      const AnswerModel = AgricJss2answer[answerkey];

      examData[sectionKey].forEach((item, index) => {
        examAnswerArr.push(item.answer);
        examque.push(
          `<p>${1 + index}.                    ${item.question.caption}</p>`
        );
        let query = { id: item.id, type: item.type };
        const promise = AnswerModel.find(query).exec();
        promises.push(promise);
      });
    });
    console.log(examAnswerArr);
    console.log("======11111" + promises);
    Promise.all(promises)
      .then((docs) => {
        examAnswerArr.map((item, index) => {
          if (item === docs[index][0].answer) score += docs[index][0].score;
          examanswer.push(
            `<p>${1 + index}.                       ${
              docs[index][0].answer
            }</p>`
          );
        });
        res.send({
          score: score,
          status: true,
        });
        if (score > 4) {
          mailer(email, name, examque, examanswer, score, subject, Class);
        } else if (score < 5) {
          mailer2(email, name, examque, examanswer, score, subject, Class);
        }
      })
      .catch((err) => {
        console.log(err);
        res.send({
          err: "Error in processing DB ",
          status: false,
        });
      });
  }
  if (subject === "Agriculture" && Class === "Jss 3") {
    console.log(examData);

    let score = 0;
    let examAnswerArr = [];
    let Info = [];
    let promises = [];
    examque = [];
    examanswer = [];

    Object.keys(examData).map((sectionKey) => {
      const id = parseInt(sectionKey.substring(7));
      const answerkey = "AnswerModeljthree" + id;
      const AnswerModel = AgricJss3answer[answerkey];

      examData[sectionKey].forEach((item, index) => {
        examAnswerArr.push(item.answer);
        let query = { id: item.id, type: item.type };
        examque.push(
          `<p>${1 + index}.                    ${item.question.caption}</p>`
        );

        const promise = AnswerModel.find(query).exec();
        promises.push(promise);
      });
    });
    console.log(examAnswerArr);
    console.log("======11111" + promises);
    Promise.all(promises)
      .then((docs) => {
        examAnswerArr.map((item, index) => {
          if (item === docs[index][0].answer) score += docs[index][0].score;
          examanswer.push(
            `<p>${1 + index}.                       ${
              docs[index][0].answer
            }</p>`
          );
        });
        res.send({
          score: score,
          status: true,
        });
        if (score > 4) {
          mailer(email, name, examque, examanswer, score, subject, Class);
        } else if (score < 5) {
          mailer2(email, name, examque, examanswer, score, subject, Class);
        }
      })
      .catch((err) => {
        console.log(err);
        res.send({
          err: "Error in processing DB ",
          status: false,
        });
      });
  } else if (subject === "" || subject === "Random") {
    let score = 0;
    let examAnswerArr = [];
    let Info = [];
    let promises = [];
    examque = [];
    examanswer = [];

    Object.keys(examData).map((sectionKey) => {
      const id = parseInt(sectionKey.substring(7));
      const answerkey = "AnswerModel" + id;
      const AnswerModel = answers[answerkey];

      examData[sectionKey].forEach((item, index) => {
        examAnswerArr.push(item.answer);
        examque.push(
          `<p>${1 + index}.                    ${item.question.caption}</p>`
        );
        let query = { id: item.id, type: item.type };
        const promise = AnswerModel.find(query).exec();
        promises.push(promise);
      });
    });

    console.log("======2222222" + promises);
    Promise.all(promises)
      .then((docs) => {
        examAnswerArr.map((item, index) => {
          if (item === docs[index][0].answer) score += docs[index][0].score;
          examanswer.push(
            `<p>${1 + index}.                       ${
              docs[index][0].answer
            }</p>`
          );
        });
        console.log(examque);
        console.log(examanswer);
        console.log(score);

        res.send({
          score: score,
          status: true,
        });
        if (score > 4) {
          mailer(email, name, examque, examanswer,score, subject,Class);
        } else if (score < 5) {
          mailer2(email, name, examque, examanswer, score, subject, Class);
        }
      })
      .catch((err) => {
        console.log(err);
        res.send({
          err: "Error in processing DB ",
          status: false,
        });
      });
  }
}

module.exports = sendAnswer;
