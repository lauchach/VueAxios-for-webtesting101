const express = require('express');
const app = express();
const LoginRoutes = express.Router();

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
 
 module.exports = LoginRoutes;