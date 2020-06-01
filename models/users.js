const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('../config/config'); //全局配置

var UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },

    Class: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    token: {
      type: String,
    },
  },
  { collection: "user" }
);


UserSchema.pre('save', function(next){
    const user = this
    if(user.isModified('password') || user.isNew ){
        bcrypt.genSalt(10, function(err, salt){
            if(err){
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err){
                    return next(err);
                }
                user.password = hash;
                next();
            })
        })
    }else{
        return next();
    }
})

// signupSchema.statics.findByCredential = function (email, password) {
//   let User = this;
//   return User.findOne({ email }).then((user) => {
//     if (!user) {
//       return Promise.reject();
//     } else {
//       return new Promise((resolve, reject) => {
//         bcrypt.compare(password, user.password, (err, res) => {
//           if (res === true) {
//             resolve(user);
//           } else {
//             reject();
//           }
//         });
//       });
//     }
//   });
// };

UserSchema.methods.comparePassword = function(passw, cb){
    console.log("parameter(passw): "+passw);
    console.log("this.password: "+this.password);

    bcrypt.compare( passw, this.password, (err, isMatch)=>{
        console.log("1:"+passw);
        console.log("2:"+this.password);
        console.log("3:"+isMatch);
        if(err){
            return cb(err);
        }

        
        cb(null, isMatch)
    })
}

UserSchema.methods.generateJwt = function(){
    const expire = new Date();
    expire.setDate(expire.getDate() + 7);
    return jwt.sign({
        email: this.email,
        exp: parseInt( expire.getTime() / 1000 ),
    }, config.secret);
}

module.exports = mongoose.model('User', UserSchema);
