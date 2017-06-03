const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to db server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate - need to checkout update operators in mongodb
  // db.collection('Todos').findOneAndUpdate({
  //   text:'Win the lottery'
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // })

  //Users set name to mike and increment age by one
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("5932040125941ee59df8af59")
  // },{
  //   $set:{
  //     name:"Mike"
  //   },
  //   $inc:{
  //     age:2
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // })


  //db.close();
});
