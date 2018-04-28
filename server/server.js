const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
require('./modules/todoDatabase.js');
const todoRouter = require('./routes/todo-route.js');


// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This line is required for Angular


const Todo = require('./models/todo.schema');
const todoData = require('./modules/todoDatabase');

app.post('/todo-route', (req, res) => {
    const todoToAdd = req.body;
    console.log(todoToAdd);
    Todo.create(todoToAdd)
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
    // console.log('POST to /todo req.body =', req.body);
});

app.get('/todo-route', (req, res) => {
    //Temporary mock data. Replace this with mongoose.
    //const mockData = [{ task: 'Mock 2'},{ task: 'Mock 2'}]
    //res.send(mockData);
    Todo.find({})
    .then((todoData) => {
        console.log(todoData);
        res.send(todoData);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});






app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log(`Server is running on port', ${PORT}`);
});