const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
//mongoose connection
require('./modules/todoDatabase.js');

const todoRouter = require('./routes/todo-route.js');

// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This line is required for Angular

//app.use('/todo-route', todoRouter); alternate syntax

const Todo = require('./models/todo.schema');
const todoData = require('./modules/todoDatabase');

app.post('/todo-route', (req, res) => {
  const todoToAdd = req.body;
  console.log(todoToAdd);  // alt (req.body)
  Todo.create(todoToAdd)  // alt Todo.create(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
  // console.log('POST to /todo req.body =', req.body);
});

app.get('/todo-route', (req, res) => {
  //Temporary mock data. Replace this with mongoose.
  //const mockData = [{ task: 'Mock 2'},{ task: 'Mock 2'}]
  //res.send(mockData);
  Todo.find({})
    .then(todoData => {
      console.log(todoData);
      res.send(todoData);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.delete('/todo-route', (req, res) => {
  Todo.findByIdAndRemove(req.query._id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
  // console.log('POST to /todo req.body =', req.body);
});

app.put('/todo-route', (req, res) => {
  Todo.findByIdAndUpdate(req.body._id, req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('error making create query', error);
      res.sendStatus(500);
    });
});

// server static files
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log(`Server is running on port', ${PORT}`);
});
