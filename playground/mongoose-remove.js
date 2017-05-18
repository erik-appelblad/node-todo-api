const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

Todo.findOneAndRemove('591d8ea75a97d3eebcd43c79').then((todo) => {
  console.log(todo);
});
