const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
require('./modules/todoDatabase.js');
const todoRouter = require('./routes/todo-route.js');


// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This line is required for Angular

const todo = require('./models/todo.schema');
const todoData = require('./modules/todoDatabase');








app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log(`Server is running on port', ${PORT}`);
});