var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//model or schema
var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  completed:{
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default: null
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
