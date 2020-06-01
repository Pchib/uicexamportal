// sudo mongod  // 1. start mongodb server

// mondo        // 2 log in mongo-cli program

const config = require("./config/config"); //全局配置
const exams = require("./models/exams");
const agricJss1exam = require("./models/AgricJss1exam");
const agricJss2exam = require("./models/AgricJss2exam");
const agricJss3exam = require("./models/AgricJss3exam");
const answers = require("./models/answers");
const agricJss1answer = require("./models/AgricJss1answer");
const agricJss2answer = require("./models/AgricJss2answer");
const agricJss3answer = require("./models/AgricJss3answer");
2;
const mongoose = require("mongoose");
mongoose.connect(config.dbURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
}); // 连接数据库

// db.user.insert([
//     {
//         "email":"Alice@naf.com",
//         "password": "1"
//     },
//     {
//         "email":"Bob@naf.com",
//         "password": "1"
//     },
//     {
//         "email":"Cat@naf.com",
//         "password": "1"
//     },
//     {
//         "email":"Dog@naf.com",
//         "password": "1"
//     },
//     {
//         "email":"a@a.com",
//         "password": "1"
//     }
// ]);


// jss 1

var agricJss1exam1 = [
  new agricJss1exam.ExamModeljone1({
    id: 1,
    type: 1,
    question: {
      caption:
        "___ animal are reared for the purpose of using them on the farm",
      options: ["A. Dairy", "B. Walk", "C. Work", "D. Pets"],
    },
    answer: "",
  }),
  new agricJss1exam.ExamModeljone1({
    id: 2,
    type: 1,
    question: {
      caption: "Example of work animais are ___ except",
      options: ["A. Donkey", "B. Cat", "C. Bull", "D. Bullock"],
    },
    answer: "",
  }),
  new agricJss1exam.ExamModeljone1({
    id: 3,
    type: 1,
    question: {
      caption: "Example of animals that live in water are ___ except",
      options: ["A. Prawn", "B. Crabs", "C. leopard", "D. Fish"],
    },
    answer: "",
  }),
  new agricJss1exam.ExamModeljone1({
    id: 4,
    type: 1,
    question: {
      caption:
        " ___ animals are rich sources of protein and minerais in human diet",
      options: ["A. poultry", "B. Dairy", "C. Work", "D. Aquatic"],
    },
    answer: "",
  }),
  new agricJss1exam.ExamModeljone1({
    id: 5,
    type: 1,
    question: {
      caption:
        "___ are animals reared for the purpose of producing egg and meat",
      options: ["A. Pets ", "B. Dairy", "C. Aquatic", "D. Poultry"],
    },
    answer: "",
  }),
  new agricJss1exam.ExamModeljone1({
    id: 6,
    type: 1,
    question: {
      caption: " ___ are example of poultry birds except",
      options: ["A. Geese", "B. Quail", "C. Cats", " D. Duck"],
    },
    answer: "",
  }),
  new agricJss1exam.ExamModeljone1({
    id: 7,
    type: 1,
    question: {
      caption: "___ are birds that are small in size",
      options: ["A. Poultry", "B. Pets", " C. Dairy", "D. Work"],
    },
    answer: "",
  }),
  new agricJss1exam.ExamModeljone1({
    id: 8,
    type: 1,
    question: {
      caption: "___ are usually of light breeds ",
      options: [
        " A. Pouitry birds",
        "B. Dairy animals",
        "C. Pets",
        "D.Work animal",
      ],
    },
    answer: "",
  }),
  new agricJss1exam.ExamModeljone1({
    id: 9,
    type: 1,
    question: {
      caption: "Poultry animals are reared mainly for ___ ",
      options: [
        "A.Meat, egg and milk",
        "B. Egg ,milk and plumage",
        " C.  Meat , egg and plumage",
        " D.  Milk , meat and egg ",
      ],
    },
    answer: "",
  }),
  new agricJss1exam.ExamModeljone1({
    id: 10,
    type: 1,
    question: {
      caption: "___ are work done by work animal except ",
      options: [
        "A. Ploughing",
        "B. Transportation",
        "C. Eating of farm products",
        " D.  Carrying of load ",
      ],
    },
    answer: "",
  }),
];

for (let i = 0; i < agricJss1exam1.length; i++) {
  agricJss1exam1[i].save(function (e, r) {
    if (i === agricJss1exam1.length - 1) {
      exit();
    }
  });
}

// jss1 answer
var agricJss1answer1 = [
  new agricJss1answer.AnswerModeljone1({
    id: 1,
    type: 1,
    score: 1,
    answer: "C. Work",
  }),
  new agricJss1answer.AnswerModeljone1({
    id: 2,
    type: 1,
    score: 1,
    answer: "B. Cat",
  }),
  new agricJss1answer.AnswerModeljone1({
    id: 3,
    type: 1,
    score: 1,
    answer: "C. leopard",
  }),
  new agricJss1answer.AnswerModeljone1({
    id: 4,
    type: 1,
    score: 1,
    answer: "A. poultry",
  }),
  new agricJss1answer.AnswerModeljone1({
    id: 5,
    type: 1,
    score: 1,
    answer: "D. Poultry",
  }),
  new agricJss1answer.AnswerModeljone1({
    id: 6,
    type: 1,
    score: 1,
    answer: "C. Cats",
  }),
  new agricJss1answer.AnswerModeljone1({
    id: 7,
    type: 1,
    score: 1,
    answer: "A. Poultry",
  }),
  new agricJss1answer.AnswerModeljone1({
    id: 8,
    type: 1,
    score: 1,
    answer: " A. Pouitry birds",
  }),
  new agricJss1answer.AnswerModeljone1({
    id: 9,
    type: 1,
    score: 1,
    answer: " C.  Meat , egg and plumage",
  }),
  new agricJss1answer.AnswerModeljone1({
    id: 10,
    type: 1,
    score: 1,
    answer: "C. Eating of farm products",
  }),
];
for (let i = 0; i < agricJss1answer1.length; i++) {
  agricJss1answer1[i].save(function (e, r) {
    if (i === agricJss1answer1.length - 1) {
      exit();
    }
  });
}

// jss2

var agricJss2exam1 = [
  new agricJss2exam.ExamModeljtwo1({
    id: 1,
    type: 1,
    question: {
      caption:
        "__  can be refered to as an infections or unfavourabie condition ",
      options: ["A.  Pathogens", "B. Virus", " C. Disease", "D. Mastitis  "],
    },
    answer: "",
  }),
  new agricJss2exam.ExamModeljtwo1({
    id: 2,
    type: 1,
    question: {
      caption: "___  are caused by pathogens or psycological factor ",
      options: [
        "A. Disease",
        "B. Virus",
        " C. Infections",
        " D None of the above ",
      ],
    },
    answer: "",
  }),
  new agricJss2exam.ExamModeljtwo1({
    id: 3,
    type: 1,
    question: {
      caption: "___ disease affect the under of farm animals ",
      options: [
        "A. Mastitis",
        " B. Foot and mouth disease",
        "C. Tuberculosis",
        " D. Brucellosis ",
      ],
    },
    answer: "",
  }),
  new agricJss2exam.ExamModeljtwo1({
    id: 4,
    type: 1,
    question: {
      caption: "Example of animals affected by mastitis are ____ except ",
      options: ["A. Cattle", "B. Dog", "C. Goats", "D. Pigs "],
    },
    answer: "",
  }),
  new agricJss2exam.ExamModeljtwo1({
    id: 5,
    type: 1,
    question: {
      caption:
        "___ is a highly contagious disease which attacks the female reproductive system in animals ",
      options: ["A. Mastitis", " B. Disease", "C. Brucelliosis", "D. Virus  "],
    },
    answer: "",
  }),
  new agricJss2exam.ExamModeljtwo1({
    id: 6,
    type: 1,
    question: {
      caption: "Culling of carriers is a prevention of brucellosis ",
      options: ["A. True ", "B False", "C. Fairly true", " D. Fairly false "],
    },
    answer: "",
  }),
  new agricJss2exam.ExamModeljtwo1({
    id: 7,
    type: 1,
    question: {
      caption: "____ can be transtimed by direct contact ",
      options: [
        "  A. Brucellosis",
        "B. Anthrax",
        "C. Mastitis",
        "D. foot and mouth disease",
      ],
    },
    answer: "",
  }),
  new agricJss2exam.ExamModeljtwo1({
    id: 8,
    type: 1,
    question: {
      caption:
        "___ is an acute highly commuicable disease that attacks animal  ",
      options: [
        "A. Foot and mouth diseaser",
        " B. Anthrax",
        " C. A and B",
        "D. None of the above ",
      ],
    },
    answer: "",
  }),
  new agricJss2exam.ExamModeljtwo1({
    id: 9,
    type: 1,
    question: {
      caption: "____ is an treatment of foot and mouth disease ",
      options: [
        "A. Injections  of antibiotics ",
        "B. Isonicotinic acid hydroxide",
        "C. Isolation of infected animals",
        "D. None of the above ",
      ],
    },
    answer: "",
  }),
  new agricJss2exam.ExamModeljtwo1({
    id: 10,
    type: 1,
    question: {
      caption: ". Culling of infected animals is a control of mastitis ",
      options: [
        "A. False",
        "B. True",
        " C.Fairlyfalse",
        "D. all of the above ",
      ],
    },
    answer: "",
  }),
];

for (let i = 0; i < agricJss2exam1.length; i++) {
  agricJss2exam1[i].save(function (e, r) {
    if (i === agricJss2exam1.length - 1) {
      exit();
    }
  });
}

// jss 2 answer

var agricJss2answer1 = [
  new agricJss2answer.AnswerModeljtwo1({
    id: 1,
    type: 1,
    score: 1,
    answer: " C. Disease",
  }),
  new agricJss2answer.AnswerModeljtwo1({
    id: 2,
    type: 1,
    score: 1,
    answer: "A. Disease",
  }),
  new agricJss2answer.AnswerModeljtwo1({
    id: 3,
    type: 1,
    score: 1,
    answer: "A. Mastitis",
  }),
  new agricJss2answer.AnswerModeljtwo1({
    id: 4,
    type: 1,
    score: 1,
    answer: "B. Dog",
  }),
  new agricJss2answer.AnswerModeljtwo1({
    id: 5,
    type: 1,
    score: 1,
    answer: "C. Brucelliosis",
  }),
  new agricJss2answer.AnswerModeljtwo1({
    id: 6,
    type: 1,
    score: 1,
    answer: "A. True ",
  }),
  new agricJss2answer.AnswerModeljtwo1({
    id: 7,
    type: 1,
    score: 1,
    answer: "  A. Brucellosis",
  }),
  new agricJss2answer.AnswerModeljtwo1({
    id: 8,
    type: 1,
    score: 1,
    answer: " C. A and B",
  }),
  new agricJss2answer.AnswerModeljtwo1({
    id: 9,
    type: 1,
    score: 1,
    answer: "C. Isolation of infected animals",
  }),
  new agricJss2answer.AnswerModeljtwo1({
    id: 10,
    type: 1,
    score: 1,
    answer: "A. False",
  }),
];
for (let i = 0; i < agricJss2answer1.length; i++) {
  agricJss2answer1[i].save(function (e, r) {
    if (i === agricJss2answer1.length - 1) {
      exit();
    }
  });
}

// jss3

var agricJss3exam1 = [
  new agricJss3exam.ExamModeljthree1({
    id: 1,
    type: 1,
    question: {
      caption: " ____ are nigeria export produce except ",
      options: ["A Europe", "B. Asia", "C. Latin American", "D. China"],
    },
    answer: "",
  }),
  new agricJss3exam.ExamModeljthree1({
    id: 2,
    type: 1,
    question: {
      caption:
        "Example of crop produce in the northern part of nigeria are ______ execpt",
      options: ["A. Cowpea", "B. Groundnut", "C. Sesame seed", "D. Cowpea"],
    },
    answer: "",
  }),
  new agricJss3exam.ExamModeljthree1({
    id: 3,
    type: 1,
    question: {
      caption: "How many states is cocoa produced from in nigeria",
      options: ["A. 16", "B. 17", " C. 22", "D. 10"],
    },
    answer: "",
  }),
  new agricJss3exam.ExamModeljthree1({
    id: 4,
    type: 1,
    question: {
      caption: "The botanical name of cotton is ___",
      options: [
        "A. glycine max",
        "B. vignaunguiculata",
        "C. manihot spp",
        "D. gosypium spp",
      ],
    },
    answer: "",
  }),
  new agricJss3exam.ExamModeljthree1({
    id: 5,
    type: 1,
    question: {
      caption:
        "___refers to the collective programmes a country has to help organization sell their product abroad",
      options: [
        "A. EXPORT PROMOTION",
        "B. IMPORT  PROMOTION",
        "C.ENTREPORT  PROMOTION",
        "D.ALL OF THE ABOVE",
      ],
    },
    answer: "",
  }),
  new agricJss3exam.ExamModeljthree1({
    id: 6,
    type: 1,
    question: {
      caption: "NEPC was estabish in ______",
      options: ["A. 1974", "B. 1976", "C. 1947", "D. 1945"],
    },
    answer: "",
  }),
  new agricJss3exam.ExamModeljthree1({
    id: 7,
    type: 1,
    question: {
      caption:
        "A _____ acts as agent for firms or individual who want to buy or sell securites",
      options: ["A. Jobbers", "B. Speculator", "C. Brokers", "D. Investors"],
    },
    answer: "",
  }),
  new agricJss3exam.ExamModeljthree1({
    id: 8,
    type: 1,
    question: {
      caption:
        "_____ are people who buys shares not because of the regular income they could obtain ",
      options: ["A. Speculators", "B.Investors", "C. jobbers", "D. Clerks"],
    },
    answer: "",
  }),
  new agricJss3exam.ExamModeljthree1({
    id: 9,
    type: 1,
    question: {
      caption: "___is often the most improtant component of a stock market",
      options: [
        "A. Stock exchange",
        "B. export promotion",
        "C. NEPC",
        "D. None of the above",
      ],
    },
    answer: "",
  }),
  new agricJss3exam.ExamModeljthree1({
    id: 10,
    type: 1,
    question: {
      caption: "The botanical name of cowpea is ____",
      options: [
        "A. glycine max",
        " B. vignaunguiculata",
        "C. no botanical name",
        "D. no idea",
      ],
    },
    answer: "",
  }),
];

for (let i = 0; i < agricJss3exam1.length; i++) {
  agricJss3exam1[i].save(function (e, r) {
    if (i === agricJss3exam1.length - 1) {
      exit();
    }
  });
}

// jss3
var agricJss3answer1 = [
  new agricJss3answer.AnswerModeljthree1({
    id: 1,
    type: 1,
    score: 1,
    answer: "D. China",
  }),
  new agricJss3answer.AnswerModeljthree1({
    id: 2,
    type: 1,
    score: 1,
    answer: "D. Cowpea",
  }),
  new agricJss3answer.AnswerModeljthree1({
    id: 3,
    type: 1,
    score: 1,
    answer: "A. 16",
  }),
  new agricJss3answer.AnswerModeljthree1({
    id: 4,
    type: 1,
    score: 1,
    answer: "D. gosypium spp",
  }),
  new agricJss3answer.AnswerModeljthree1({
    id: 5,
    type: 1,
    score: 1,
    answer: "A. EXPORT PROMOTION",
  }),
  new agricJss3answer.AnswerModeljthree1({
    id: 6,
    type: 1,
    score: 1,
    answer: "B. 1976",
  }),
  new agricJss3answer.AnswerModeljthree1({
    id: 7,
    type: 1,
    score: 1,
    answer: "C. Brokers",
  }),
  new agricJss3answer.AnswerModeljthree1({
    id: 8,
    type: 1,
    score: 1,
    answer: "A. Speculators",
  }),
  new agricJss3answer.AnswerModeljthree1({
    id: 9,
    type: 1,
    score: 1,
    answer: "A. Stock exchange",
  }),
  new agricJss3answer.AnswerModeljthree1({
    id: 10,
    type: 1,
    score: 1,
    answer: " B. vignaunguiculata",
  }),
];
for (let i = 0; i < agricJss3answer1.length; i++) {
  agricJss3answer1[i].save(function (e, r) {
    if (i === agricJss3answer1.length - 1) {
      exit();
    }
  });
}

// db.section2.insert([
//     {
//         "id": 1,
//         "type": 2,
//         "question":{
//             "caption": "Sample Question 2-1",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
//             "options":[
//                 "option 2-1-1",
//                 "option 2-1-2",
//                 "option 2-1-3",
//                 "option 2-1-4"
//             ]
//         },
//         "answer": ""
//     },
//     {
//         "id": 2,
//         "type": 2,
//         "question":{
//             "caption": "Sample Question 2-2",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
//             "options":[
//                 "option 2-2-1",
//                 "option 2-2-2",
//                 "option 2-2-3",
//                 "option 2-2-4"
//             ]
//         },
//         "answer": ""

//     },
//     {
//         "id": 3,
//         "type": 2,
//         "question":{
//             "caption": "Sample Question 2-3",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
//             "options":[
//                 "option 2-2-1",
//                 "option 2-2-2",
//                 "option 2-2-3",
//                 "option 2-2-4"
//             ]
//         },
//         "answer": ""

//     },
//     {
//         "id": 4,
//         "type": 2,
//         "question":{
//             "caption": "Sample Question 2-4",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
//             "options":[
//                 "option 2-2-1",
//                 "option 2-2-2",
//                 "option 2-2-3",
//                 "option 2-2-4"
//             ]
//         },
//         "answer": ""

//     },
//     {
//         "id": 5,
//         "type": 2,
//         "question":{
//             "caption": "Sample Question 2-5",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
//             "options":[
//                 "option 2-2-1",
//                 "option 2-2-2",
//                 "option 2-2-3",
//                 "option 2-2-4"
//             ]
//         },
//         "answer": ""

//     },
//     {
//         "id": 6,
//         "type": 2,
//         "question":{
//             "caption": "Sample Question 2-6",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY",
//             "options":[
//                 "option 2-2-1",
//                 "option 2-2-2",
//                 "option 2-2-3",
//                 "option 2-2-4"
//             ]
//         },
//         "answer": ""

//     }
// ])

// db.section3.insert([
//     {
//         "id": 1,
//         "type": 3,
//         "question":{
//             "caption": "Sample Question 3-1",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
//         },
//         "answer": ""
//     },
//     {
//         "id": 2,
//         "type": 3,
//         "question":{
//             "caption": "Sample Question 3-2",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
//         },
//         "answer": ""
//     },
//     {
//         "id": 3,
//         "type": 3,
//         "question":{
//             "caption": "Sample Question 3-2",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
//         },
//         "answer": ""
//     },
//     {
//         "id": 4,
//         "type": 3,
//         "question":{
//             "caption": "Sample Question 3-2",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
//         },
//         "answer": ""
//     },
//     {
//         "id": 5,
//         "type": 3,
//         "question":{
//             "caption": "Sample Question 3-2",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
//         },
//         "answer": ""
//     },
//     {
//         "id": 6,
//         "type": 3,
//         "question":{
//             "caption": "Sample Question 3-2",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
//         },
//         "answer": ""
//     },
//     {
//         "id": 7,
//         "type": 3,
//         "question":{
//             "caption": "Sample Question 3-2",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
//         },
//         "answer": ""
//     },
//     {
//         "id": 8,
//         "type": 3,
//         "question":{
//             "caption": "Sample Question 3-2",
//             "url": "https://www.youtube.com/embed/tgbNymZ7vqY"
//         },
//         "answer": ""
//     }
// ])

// random
var exam = [
  new exams.ExamModel1({
    id: 1,
    type: 1,
    question: {
      caption: "Who was the first black american president",
      options: ["Donald trump", "George Bush", "Buhari", "Barack obama"],
    },
    answer: "",
  }),
  new exams.ExamModel1({
    id: 2,
    type: 1,
    question: {
      caption: "What year did Corona virus started",
      options: ["2020", "2018", "2019", "2017"],
    },
    answer: "",
  }),
  new exams.ExamModel1({
    id: 3,
    type: 1,
    question: {
      caption: "What year did World war 1 begin",
      options: ["1995", "1914", "2000", "1814"],
    },
    answer: "",
  }),
  new exams.ExamModel1({
    id: 4,
    type: 1,
    question: {
      caption: "Who started the World war 2",
      options: ["Hitler", "Osama", "trump", "boko haram"],
    },
    answer: "",
  }),
  new exams.ExamModel1({
    id: 5,
    type: 1,
    question: {
      caption: "The planet closest to th sun is ___",
      options: ["pluto", "venus", "mecury", "earth"],
    },
    answer: "",
  }),
  new exams.ExamModel1({
    id: 6,
    type: 1,
    question: {
      caption: "____ is the largest planet",
      options: ["Saturn", "Jupiter", "Uranus", "Naptune"],
    },
    answer: "",
  }),
  new exams.ExamModel1({
    id: 7,
    type: 1,
    question: {
      caption: "How many planet do we have",
      options: ["One", "Two", "Nine", "Twelve"],
    },
    answer: "",
  }),
  new exams.ExamModel1({
    id: 8,
    type: 1,
    question: {
      caption: "____ is the largest star",
      options: ["moon", "earth", "sun", "satelite"],
    },
    answer: "",
  }),
  new exams.ExamModel1({
    id: 9,
    type: 1,
    question: {
      caption: "____ are the preventive measures against COVID19 except",
      options: ["Keep social distance", "Washing of hands regularly", "None of the above", "The use of face mask"],
    },
    answer: "",
  }),
  new exams.ExamModel1({
    id: 10,
    type: 1,
    question: {
      caption: "Who is the father of electricity",
      options: ["Thomas edison", "Michael Faraday", "Sir Isaac Newton", "Benjamin"],
    },
    answer: "",
  }),
];

for (let i = 0; i < exam.length; i++) {
  exam[i].save(function (e, r) {
    if (i === exam.length - 1) {
      exit();
    }
  });
}

var answer = [
  new answers.AnswerModel1({
    id: 1,
    type: 1,
    score: 1,
    answer: "Barack obama",
  }),
  new answers.AnswerModel1({
    id: 2,
    type: 1,
    score: 1,
    answer: "2019",
  }),
  new answers.AnswerModel1({
    id: 3,
    type: 1,
    score: 1,
    answer: "1914",
  }),
  new answers.AnswerModel1({
    id: 4,
    type: 1,
    score: 1,
    answer: "Hitler",
  }),
  new answers.AnswerModel1({
    id: 5,
    type: 1,
    score: 1,
    answer: "mecury",
  }),
  new answers.AnswerModel1({
    id: 6,
    type: 1,
    score: 1,
    answer: "Jupiter",
  }),
  new answers.AnswerModel1({
    id: 7,
    type: 1,
    score: 1,
    answer: "Nine",
  }),
  new answers.AnswerModel1({
    id: 8,
    type: 1,
    score: 1,
    answer: "sun",
  }),
  new answers.AnswerModel1({
    id: 9,
    type: 1,
    score: 1,
    answer: "None of the above",
  }),
  new answers.AnswerModel1({
    id: 10,
    type: 1,
    score: 1,
    answer: "Michael Faraday",
  }),
];
for (let i = 0; i < answer.length; i++) {
  answer[i].save(function (e, r) {
    if (i === answer.length - 1) {
      exit();
    }
  });
}

// var answer2 = [
//   new answers.AnswerModel2({
//     id: 1,
//     type: 1,
//     score: 1,
//     answer: "option 1-1-1",
//   }),
//   new answers.AnswerModel2({
//     id: 2,
//     type: 1,
//     score: 1,
//     answer: "option 1-2-1",
//   }),
//   new answers.AnswerModel2({
//     id: 3,
//     type: 1,
//     score: 1,
//     answer: "option 1-2-1",
//   }),
//   new answers.AnswerModel2({
//     id: 4,
//     type: 1,
//     score: 1,
//     answer: "option 1-2-1",
//   }),
//   new answers.AnswerModel2({
//     id: 5,
//     type: 1,
//     score: 1,
//     answer: "option 1-2-1",
//   }),
//   new answers.AnswerModel2({
//     id: 6,
//     type: 1,
//     score: 1,
//     answer: "option 1-2-1",
//   }),
//   new answers.AnswerModel2({
//     id: 7,
//     type: 1,
//     score: 1,
//     answer: "option 1-2-1",
//   }),
//   new answers.AnswerModel2({
//     id: 8,
//     type: 1,
//     score: 1,
//     answer: "option 1-2-1",
//   }),
// ];
// for (let i = 0; i < answer2.length; i++) {
//   answer2[i].save(function (e, r) {
//     if (i === answer2.length - 1) {
//       exit();
//     }
//   });
// }

function exit() {
  mongoose.disconnect();
}

// db.answer2.insert([
//     {
//         "id": 1,
//         "type": 2,
//         "score": 2,
//         "answer": "option 2-2-2"
//     },
//     {
//         "id": 2,
//         "type": 2,
//         "score": 2,
//         "answer": "option 2-2-2"
//     },
//     {
//         "id": 3,
//         "type": 2,
//         "score": 2,
//         "answer": "option 2-2-2"
//     },
//     {
//         "id": 4,
//         "type": 2,
//         "score": 2,
//         "answer": "option 2-2-2"
//     },
//     {
//         "id": 5,
//         "type": 2,
//         "score": 2,
//         "answer": "option 2-2-2"
//     },
//     {
//         "id": 6,
//         "type": 2,
//         "score": 2,
//         "answer": "option 2-2-2"
//     },
//     {
//         "id": 7,
//         "type": 2,
//         "score": 2,
//         "answer": "option 2-2-2"
//     },
//     {
//         "id": 8,
//         "type": 2,
//         "score": 2,
//         "answer": "option 2-2-2"
//     },

// ])

// db.answer3.insert([
//     {
//         "id": 1,
//         "type": 3,
//         "score": 3,
//         "answer": ""
//     },
//     {
//         "id": 2,
//         "type": 3,
//         "score": 3,
//         "answer": ""
//     },
//     {
//         "id": 3,
//         "type": 3,
//         "score": 3,
//         "answer": ""
//     },
//     {
//         "id": 4,
//         "type": 3,
//         "score": 3,
//         "answer": ""
//     },
//     {
//         "id": 5,
//         "type": 3,
//         "score": 3,
//         "answer": ""
//     },
//     {
//         "id": 6,
//         "type": 3,
//         "score": 3,
//         "answer": ""
//     },
//     {
//         "id": 7,
//         "type": 3,
//         "score": 3,
//         "answer": ""
//     },
//     {
//         "id": 8,
//         "type": 3,
//         "score": 3,
//         "answer": ""
//     },

// ])
