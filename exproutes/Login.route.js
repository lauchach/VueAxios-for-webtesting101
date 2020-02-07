const express = require('express');
const app = express();
const LoginRoutes = express.Router();

const Ticket = require('../models/Login');

 LoginRoutes.route('/').get(function (req, res) {
  console.log('LoginRoutes.route >>>...Login../')
   Ticket.find(function (err, Login){
     if(err){
       console.log(err);
     }
     else {
       res.json(Login);
     }
   });
 });
 
 module.exports = LoginRoutes;