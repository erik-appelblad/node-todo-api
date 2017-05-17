//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable to connect to Mongo DB server');
  }
  console.log('Connected to Mongo DB server');

    db.collection('Users').find({name: "Erik Appelblad"}).count().then((count) => {
      console.log(`Number of users named Erik Appelblad is ${count}`);
    }, (error) => {
      console.log('Unable to fetch users');
    })
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // });

  // db.close();
});
