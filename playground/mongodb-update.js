const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Mongo DB server');
  }
  console.log('Connected to Mongo DB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("591c2e6518cb8416ca4f0bfb")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  // });

  db.collection('Users').findOneAndUpdate({
    name: "Jen"
  }, {
    $set: {
      name: "Erik"
    },
    $inc: {age: 1}

}).then((result) => {
  console.log(result);
})

});
