const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to db server');
  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text:"Eat pizza"}).then((result)=>{
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text:"Win the lottery"}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text:"Job hunting"}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name:"Mike"}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("593203db25941ee59df8af4b")
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });


  //db.close();
});
