const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    name: { type: String },
    completed: { type: Boolean, required: false }
});



module.exports = mongoose.model('Todos', todoSchema);