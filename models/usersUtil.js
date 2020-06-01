const UserModel = require("./users");

function createNewUser(userData, callback) {
  console.log(userData.name);
  console.log(userData.email);

  UserModel.create(
    {
      name: userData.fame,
      email: userData.email,
      password: userData.password,
      subject: userData.subject,
      Class: userData.Class,
    },
    function (err, user) {
      if (err) {
        console.log("Error: User already existed kindly refill the form");
        err.message = "Error: User already existed kindly refill the form";
        callback(err);
      } else if (user) {
        console.log("New user successfully created");
        const token = user.generateJwt();

        callback(null, user.email, token, user.name, user.subject, user.Class);
      }
    }
  );
}

function validateUser(userData, callback) {
  const email = userData.email;
  const password = userData.password;

  UserModel.findOne({ email: email }, function (err, user) {
    if (err) {
      err.message = "Error From DB";
      callback(err);
    }

    if (!user) {
      let err = {};
      err.message = "No such email kindly refill the form";
      callback(err);
    } else if (user) {
      user.comparePassword(password, function (err, isMatch) {
        if (err) {
          let err = {};
          err.message =
            "Bcrypt error";
          callback(err);
        }
        if (!isMatch) {
          let err = {};
          err.message =
            "Password mismatch kindly refill the form";
          callback(err);
        } else if (isMatch) {
          const token = user.generateJwt();

          callback(null, user.email, token, user.name, user.subject, user.Class);
        }
      });
    }
  });
}

module.exports = {
  createNewUser: createNewUser,
  validateUser: validateUser,
};
