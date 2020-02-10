const express = require("express");
const app = express();
const indexroutes = express.Router();
const mongoose = require("mongoose");

const User = require("../models/indexx");

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

indexroutes.route("/").post(function(req, res) {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var newuser = new User();
  newuser.username = username;
  newuser.email = email;
  newuser.password = password;

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
          res.json({ status: newuser.email + " registered" });
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
