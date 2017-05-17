const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Mongo DB server');
  }
  console.log('Connected to Mongo DB server');

  db.collection('Users').deleteMany({name: "Erik Appelblad"}).then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteOne({_id: ObjectID("591c22fd49956f21c465aa34")}).then((result) => {
    console.log(result);
  })

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

});
