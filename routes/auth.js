const express = require("express");
const router = express.Router();
const usersUtil = require("../models/usersUtil");
const createNewUser = usersUtil.createNewUser;
const validateUser = usersUtil.validateUser;
const passport = require("passport");
var localSignupStrategy = require("../passport/signup_passport");
var localLoginStrategy = require("../passport/login_passport");


router.post("/login", function (req, res, next) {
  
    const userData = {
    email: req.body.email.trim(),
    password: req.body.password
  
  };
    console.log(userData.email);
     
   

        // find a user by email address
        return usersUtil.validateUser(userData, (err, email, token, name, subject, Class) => {
            if (err) {
      return res.status(400).json({
        status: false,
        message: err.message,
      });
    }
console.log(name);

    return res.json({
      status: true,
      email: email,
      token: token,
      name,
      subject,
      Class
    });
        });
    } 
)

  // return passport.authenticate("local-login", function (
  //   err,
  //   email,
  //   token,
  //   name
  // ) {
  //      console.log(email);

  //   if (err) {
  //     return res.status(400).json({
  //       status: false,
  //       message: err.message,
  //     });
  //   }

  //   return res.json({
  //     status: true,
  //     email: email,
  //     token: token,
  //     name,
  //   });
  // })(req, res, next);
// });

router.post("/signup", function (req, res, next) {
  console.log(req.body.fame);

  const userData = {
    email: req.body.email.trim(),
    password: req.body.password,
    subject: req.body.subject,
    fame: req.body.fame,
    Class: req.body.Class,
  };

  // find a user by email address
  usersUtil.createNewUser(userData, (err, email, token, name,subject, Class) => {
    console.log(err, email, name, subject, Class);

    if (err) {
      return res.status(400).json({
        status: false,
        message: err.message,
      });
    } else if (token) {
      return res.json({
        status: true,
        email: email,
        token: token,
        name,
        subject,
        Class
      });
    }
  });
});
//   }
// );    // return passport.authenticate('local-signup', function(err, email, token){
//     if( err ){
//         return res.status(400).json({
//         status: false,
//         message: err.message
//         })
//     }
//     return res.json({
//       status: true,
//       email: email,
//       token: token
//     })
// })(req, res, next)
//})

module.exports = router;
