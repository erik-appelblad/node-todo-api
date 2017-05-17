//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable to connect to Mongo DB server');
  }
  console.log('Connected to Mongo DB server');

  db.collection('Users').insertOne({
    name: "Erik Appelblad",
    age: 29,
    location: "Umeå"
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert user', user);
    }
    console.log(result.ops[0]._id.getTimestamp());//JSON.stringify(result.ops, undefined, 2))
  });

  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
