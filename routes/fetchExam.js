
const config = require('../config/config')
const exams = require('../models/exams')
const agricJss1exam = require("../models/AgricJss1exam");
const agricJss2exam = require("../models/AgricJss2exam");
const agricJss3exam = require("../models/AgricJss3exam");


const random = require('mongoose-simple-random')
const types= config.types
const numbers = config.numbers


function fetchExam(req, res){
     console.log(req.body);
     console.log(req.body.user.Class);
     console.log(req.body.user.subject);

     console.log(req.body.user.email);
     console.log(req.body.user.name);
  let subject = req.body.user.subject;
  let Class = req.body.user.Class;
  let email = req.body.user.email;
  let name = req.body.user.name;

    const keyArr = Object.keys(exams)
    let examModelArr = []
    types.forEach(function(index){
        const key = keyArr[index-1]
        examModelArr.push(exams[key])
    }) 
  
    

    let result = { payload: {}, jss1 : {}, jss2 :{}, jss3:{}}
  
  // for jss1
   if (subject === "Agriculture" && Class === "Jss 1"){
     const keyArrj1 = Object.keys(agricJss1exam);
    let examModelArrj1 = [];
    types.forEach(function (index) {
      const keyj1 = keyArrj1[index - 1];
      examModelArrj1.push(agricJss1exam[keyj1]);
    });
    console.log(examModelArrj1);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      
 let promisesj1 = [];
 examModelArrj1.map((examModel, index) => {
   const numj1 = numbers[index];
   const aggregatej1 = examModel.aggregate();
   const queryj1 = aggregatej1.sample(numj1).exec();
   promisesj1.push(queryj1);
 });

 Promise.all(promisesj1).then(function (data) {
   data.map((item, index) => {
     const keyj1 = "section" + (index + 1);
     result.jss1[keyj1] = item;
   });

 res.send(result);

 console.log(result);
         
 });}
//  jss2
  if (subject === "Agriculture" && Class === "Jss 2"){
    const keyArrj2 = Object.keys(agricJss2exam);  
       let examModelArrj2 = [];
       types.forEach(function (index) {
         const keyj2 = keyArrj2[index - 1];
         examModelArrj2.push(agricJss2exam[keyj2]);
       });
       console.log(examModelArrj2);

       let promisesj2 = [];
       examModelArrj2.map((examModel, index) => {
         const numj2 = numbers[index];
         const aggregatej2 = examModel.aggregate();
         const queryj2 = aggregatej2.sample(numj2).exec();
         promisesj2.push(queryj2);
       });
        console.log("/////////////////////////");

        console.log(promisesj2);


       Promise.all(promisesj2).then(function (data) {
         data.map((item, index) => {
           const keyj2 = "section" + (index + 1);
           result.jss2[keyj2] = item;
         });

         res.send(result);

         console.log(result);
       });
      }

      
        // // jss3
          if (subject === "Agriculture" && Class === "Jss 3"){
            const keyArrj3 = Object.keys(agricJss3exam);
          let examModelArrj3 = [];
          types.forEach(function (index) {
            const keyj3 = keyArrj3[index - 1];
            examModelArrj3.push(agricJss3exam[keyj3]);
          });
          console.log('..................................................');
          
          console.log(examModelArrj3);

          let promisesj3 = [];
          examModelArrj3.map((examModel, index) => {
            const numj3 = numbers[index];
            const aggregatej3 = examModel.aggregate();
            const queryj3 = aggregatej3.sample(numj3).exec();
            promisesj3.push(queryj3);
          });
 console.log("..................................................");

 console.log(promisesj3);

          Promise.all(promisesj3).then(function (data) {
            data.map((item, index) => {
              const keyj3 = "section" + (index + 1);
              result.jss3[keyj3] = item;
            });

             res.send(result);

             console.log(result);
          });}
          else if (subject === "" || subject === "Random"){


  let promises = [];
  examModelArr.map((examModel, index) => {
    const num = numbers[index];
    const aggregate = examModel.aggregate();
    const query = aggregate.sample(num).exec();
    promises.push(query);
  });

  Promise.all(promises).then(function (data) {
    data.map((item, index) => {
      const key = "section" + (index + 1);
      result.payload[key] = item;
    });

    //replicate and send new data
    res.send(result);

  console.log(result);
  });
          }
  

}

module.exports = fetchExam
