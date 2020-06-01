const config = require("../config/config");
const PassportLocalStrategy = require("passport-local").Strategy;
const usersUtil = require("../models/usersUtil");

module.exports = new PassportLocalStrategy(
  {
    userFame: "fame",
    usernameField: "email",
    passwordField: "password",
    session: false,
  },
  function (fame, email, password, done) {
    const userData = {
      email: email.trim(),
      password: password,
      fame: fame,
    };
console.log(userData);

    // find a user by email address
    return usersUtil.createNewUser(userData, (err, email, token) => {
      if (err) return done(err);
      return done(null, email, token);
    });
  }
);
