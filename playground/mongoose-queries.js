const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "59333bd4755ee056ccf6d289";

if(!ObjectID.isValid(id)){
  console.log("------------ID not valid ---------------");
}

// User.find({
//   _id: id
// }).then((users) => {
//   console.log("Users", users);
// });
//
// User.findOne({
//   _id: id
// }).then((user) => {
//   console.log("User", user);
// });

User.findById(id).then((user) => {
  if (!user){
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
