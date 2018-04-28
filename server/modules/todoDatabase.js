const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/todo-route';

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error)
});