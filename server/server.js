var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//model or schema
var Todo = mongoose.model('Todo',{
  text:{
    type: String
  },
  completed:{
    type: Boolean
  },
  completedAt:{
    type: Number
  }
});

//create new Todo object
var newTodo = new Todo({
  text:'Eat pineapple',
  completed:true,
  completedAt:254738
});

//save returns the data to the database
newTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo');
});
