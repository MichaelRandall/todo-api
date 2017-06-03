const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to db server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'First thing to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('There was an error', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Mike',
    age: 40,
    location: 'Portland, OR'
  },(err, result)=>{
    if(err){
      return console.log('There was an error', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
