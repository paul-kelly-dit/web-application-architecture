var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema.
var userSchema = new Schema({
  name: String,
  age: Number
});

// Create a model.
var User = mongoose.model('User', userSchema);

module.exports = User;