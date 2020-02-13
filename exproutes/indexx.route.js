const express = require("express");
const app = express();
const indexroutes = express.Router();
const mongoose = require("mongoose");

const User = require("../models/indexx");

//  V1.2 true
// indexroutes.route('/').post(function (req, res) {
//         var username = req.body.username;
//         var email = req.body.email;
//         var password = req.body.password;

//         var newuser = new User();
//         newuser.username = username;
//         newuser.email = email;
//         newuser.password = password;
//         newuser.save(function(err, savedUser){
//             if(err) {
//                 console.log(err);
//                 return res.status(500).send();
//             }
//             console.log('code', 200,'>>> add+' );
//           return res.status(200).send();
//         })
//       })


//  V2.0 true
indexroutes.route("/").post(function(req, res) {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var type = req.body.type;

  // var newuser = new User();
  // newuser.username = username;
  // newuser.email = email;
  // newuser.password = password;
  // newuser.type = type;

  let newuser = new User({
    username,
    password,
    email,
    type
});
  
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        newuser.save(function(err, savedUser) {
          if (err) {
            console.log(err);
            return res.status(500).send();
          }
          console.log("code", 200, ">>> add+");
          res.json({ status: 200,success: true, msg: (newuser.email," registered") });
          return res.status(200).send();
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

 
//  V1.0 // T_T
//   var newuser = new User();
//   newuser.username = username;
//   newuser.email = email;
//   newuser.password = password;
//   newuser.save(function(err, savedUser){
//       if(err) {
//           console.log(err);
//           return res.status(500).send();
//       }
//       console.log('code', 200,'>>> add+' );
//       res.json({ status: newuser.email + ' registered' })
//     return res.status(200).send();
//   })

// })


// test get // true
indexroutes.route("/").get(function(req, res) {
  console.log("indexroutes.route >>>...Login../get");
  User.find(function(err, Login) {
    if (err) {
      console.log(err);
    } else {
      res.json(Login);
    }
  });
});

module.exports = indexroutes;
