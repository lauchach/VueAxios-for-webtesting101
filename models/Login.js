const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
var login = new Schema({
    username: {
    type: String
  },
    email: {
    type: String
  },
    password: {
    type: String
  },
    type: {
    type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('Login', login);