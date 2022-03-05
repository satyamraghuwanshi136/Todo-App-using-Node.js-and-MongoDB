const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todotest',()=>{
  console.log('connected to mongodb');
})

const listModel = mongoose.Schema({
  message: String
});


module.exports = mongoose.model('list', listModel);