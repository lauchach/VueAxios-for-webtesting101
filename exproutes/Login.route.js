const express = require('express');
const app = express();
const LoginRoutes = express.Router();
const  mongoose = require('mongoose');
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt")

const Login = require('../models/Login');

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

 LoginRoutes.route('/').post(function (req, res) {
  console.log('LoginRoutes.route >>>...Login../post')
   Login.find(function (err, Login){
     if(err){
       console.log(err);
     }
     else {
       res.json(Login);
     }
   });
 });




// LoginRoutes.post("/register", (req, res) => {
//   const today = new Date()
//   const userData = {
//       email: req.body.email,
//       password: req.body.password
//       // created: today
//   }
// })

// LoginRoutes.post('/login', (req, res) => {
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

 
 module.exports = LoginRoutes;