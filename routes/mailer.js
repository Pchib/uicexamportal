const nodemailer = require("nodemailer");


// process.env.EMAIL||




const mailer=(email, name,exam,answer,score,subject,Class)=>{


let transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user :process.env.EMAIL,
    pass: process.env.PASSWORD
  }})
 let mailOption = {
   from: "uicsoft1@gmail.com",
   to: `ugwuisaaciu@gmail.com,${email}`,
   subject: `Result of ${name} , Subject: ${subject}, Class:  ${Class}`,
   html: `<p><h1>${score}${"    "}/10</h1></p>
  <p> <h2>Thanks For taking the test</h2></p>
            <h3><p> Questions </p></h3>
            <h5><p> ${exam}</p></h5>
            <h3><p> Answers </p></h3>
            <h5><p> ${answer}</p></h5> `,
 };
transport.sendMail(mailOption, (error,info)=>{
    if(info){
        console.log(info)
     
    }else{

        console.log(error)
      
    }

});


}


const mailer2 = (email, name, exam, answer, score, subject, Class) => {
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user :process.env.EMAIL,
      pass: process.env.PASSWORD
    },
  });
  let mailOption = {
    from: "uicsoft1@gmail.com",
    to: `ugwuisaaciu@gmail.com,${email}`,
    email,
    subject: `Result of ${name} , Subject: ${subject}, Class:  ${Class}`,
    html: `<p><h1>${score}${"    "}/10</h1></p>
  <p> <h2>Thanks For taking the test</h2></p>
            <h3><p> You have to Score above average to see the answers to the questions </p></h3>
          <h4> <p>Kindly study harder and try agin</p></h4>
`,
  };
  transport.sendMail(mailOption, (error, info) => {
    if (info) {
      console.log(info);
    } else {
      console.log(error);
    }
  });
};

































module.exports ={ mailer, mailer2}