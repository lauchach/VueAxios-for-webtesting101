const express = require('express');
const app = express();
const LoginRoutes = express.Router();
const  mongoose = require('mongoose');
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt")

const Login = require('../models/Login');


// get  true
 LoginRoutes.route('/').get(function (req, res) {                      
  console.log('LoginRoutes.route >>>...Login../get')
   Login.find(function (err, Login){
     if(err){
       console.log(err);
     }
     else {
       res.json(Login);
     }
   });
 });



//  LoginRoutes.route('/').post(function (req, res) {
//   console.log('LoginRoutes.route >>>...Login../post')
//    Login.find(function (err, Login){
//      if(err){
//        console.log(err);
//      }
//      else {
//        res.json(Login);
//      }
//    });
//  });




// LoginRoutes.post("/register", (req, res) => {                     post //true
//   const today = new Date()
//   const userData = {
//       email: req.body.email,
//       password: req.body.password
//       // created: today
//   }
// })


// LoginRoutes.post('/login', (req, res) => {                         test T_T
//   Login.findOne({
//     email: "tarnapot.b38@gmail.com"
//   })
//   .then(LoginRoutes => {
//     if(this.email === "tarnapot.b38@gmail.com") {
//       console.log('/login if', this.email)
//       // if(bcrypt.compareSync(req.body.password, user.password)) {
//         // const payload = {}
//       }else{
//         console.log('/login else',req.body)
//         res.json({erro: 'User does not exist'})
//       }
//   })
// })

// LoginRoutes.route("/").post(function(req, res) {
//   var username = req.body.username;
//   var email = req.body.email;
//   var password = req.body.password;
//   var newuser = new User();
//   newuser.username = username;
//   newuser.email = email;
//   newuser.password = password;

//   Login.findOne({
//     email: req.body.email
//   })
//     .then(user => {
//       if (!user) {
//         newuser.compare((req.body.password, user.password).then(isMatch => {
//           if (isMatch) {
//                   res.status(200).json({
//                       success: true,
//                       user: user,
//                       msg: "Hurry! You are now logged in."
//                   });
              
//           } else {
//               return res.status(404).json({
//                   msg: "Incorrect password.",
//                   success: false
//               });
//           }
//         })
//       )}
//     })
//   })

  // LoginRoutes.post('/loginx', (req, res) => {
  //   Login.findOne({
  //       username: req.body.email
  //   }).then(user => {
  //       if (!user) {
  //         // fake ////////////////////////////////
  //           return res.status(200).json({
  //               msg: "Email is not found.",
  //               success: true
  //           });
  //       }
  //       // If there is user we are now going to compare the password
  //       bcrypt.compare(req.body.password, user.password).then(isMatch => {
  //           if (isMatch) {
  //               // User's password is correct and we need to send the JSON Token for that user
  //               const payload = {
  //                   _id: user._id,
  //                   username: user.username,
  //                   name: user.name,
  //                   email: user.email
  //               }
  //               jwt.sign(payload, key, {
  //                   expiresIn: 604800
  //               }, (err, token) => {
  //                   res.status(200).json({
  //                       success: true,
  //                       token: `Bearer ${token}`,
  //                       user: user,
  //                       msg: "Hurry! You are now logged in."
  //                   });
  //               })
  //           } else {
  //               return res.status(404).json({
  //                   msg: "Incorrect password.",
  //                   success: false
  //               });
  //           }
  //       })
  //   });
  // })


// LoginRoutes.post('/', (req, res) => {
//   Login.findOne({
//       email: req.body.email
//     }).then(user => {
//       if (!user) {
//           return res.status(404).json({
//               msg: "Username is not found.",
//               success: false
//           });
//       }then(isMatch => {
//           if (isMatch) {
//               // User's password is correct and we need to send the JSON Token for that user
//               const payload = {
//                   _id: user._id,
//                   username: user.username,
//                   name: user.name,
//                   email: user.email
//               }
//                   res.status(200).json({
//                       success: true,
//                       token: `Bearer ${token}`,
//                       user: user,
//                       msg: "Hurry! You are now logged in."
//                   });
//           } else {
//               return res.status(404).json({
//                   msg: "Incorrect password.",
//                   success: false
//               });
//           }
//       })
//   });
// });   
 


LoginRoutes.post('/login', (req, res) => {
  console.log('email:',req.body.email,'password:',req.body.password)
  Login.findOne({
      email: req.body.email, 
      password: req.body.password
  }).then(user => {
      if (!user) {
          return res.status(404).json({
              msg: "Email is not found.",
              success: false
          });
      } else {
        return res.status(200).json({
            msg: "Login !!!!",
            success: true,
            username: user.username,
            type: user.type
        });
      }
    })
  })





 module.exports = LoginRoutes;