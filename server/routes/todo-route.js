const express = require('express');
const router = express.Router(); //// require('express').Router();
const mongoose = require('mongoose');
const Todo = require('../models/todo.schema');
const todoData = require('../modules/todoDatabase');

// router.post('/', (req, res) => {
//     const todoToAdd = req.body;
//     console.log(todoToAdd);  // alt (req.body)
//     Todo.create(todoToAdd)  // alt Todo.create(req.body)
//         .then(() => {
//             res.sendStatus(200);
//         })
//         .catch(error => {
//             console.log(error);
//             res.sendStatus(500);
//         });
//     // console.log('POST to /todo req.body =', req.body);
// });

// router.get('/', (req, res) => {
//     //Temporary mock data. Replace this with mongoose.
//     //const mockData = [{ task: 'Mock 2'},{ task: 'Mock 2'}]
//     //res.send(mockData);
//     Todo.find({})
//         .then(todoData => {
//             console.log(todoData);
//             res.send(todoData);
//         })
//         .catch(error => {
//             console.log(error);
//             res.sendStatus(500);
//         });
// });

// router.delete('/', (req, res) => {
//     Todo.findByIdAndRemove(req.query._id)
//         .then(() => {
//             res.sendStatus(200);
//         })
//         .catch(error => {
//             console.log(error);
//             res.sendStatus(500);
//         });
//     // console.log('POST to /todo req.body =', req.body);
// });

// router.put('/', (req, res) => {
//     Todo.findByIdAndUpdate(req.body._id, req.body)
//         .then(() => {
//             res.sendStatus(200);
//         })
//         .catch(error => {
//             console.log('error making create query', error);
//             res.sendStatus(500);
//         });
// });
module.exports = router;