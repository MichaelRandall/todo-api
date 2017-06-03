//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to db server');
  }
  console.log('Connected to MongoDB server');

  //query options in find {completed: false} one example
  /*query option with id {
    _id: new ObjectID('5931fc7bc265c1037daad117')
  }*/
  // db.collection('Todos').find().toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err)=>{
  //   console.log('unable to fetch todos', err);
  // });

  // db.collection('Users').find().count().then((count)=>{
  //   console.log(`Users count: ${count}`);
  //
  // },(err)=>{
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Mike'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));

  },(err)=>{
    console.log('unable to fetch users', err);
  });



  //db.close();
});
