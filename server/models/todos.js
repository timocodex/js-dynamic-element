var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var todoSchema = new Schema({
  todo: String,
  done: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Todo = mongoose.model('todos', todoSchema);

// make this available to our users in our Node applications
module.exports = Todo;
