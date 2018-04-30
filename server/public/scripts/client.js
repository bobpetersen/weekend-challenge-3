console.log('js');

var app = angular.module('TodoApp', []);

app.controller('TodoController', ['$http',function ($http) {
    var self = this;
    self.newTodo = {completed: false };

    self.displayArray = function() {
        $http({
            method: 'GET',
            url: '/todo-route',
        }).then(function successCallback(response) {
            self.todoArray = response.data;
        }).catch(function (response) {
            console.log('Error on GET', response.data);
        })
    } //end display array
    self.createTodo = function () {
        $http({
            method: 'POST',
            url: '/todo-route',
            data: self.newTodo
        }).then(function successCallback(response) {
            console.log('success on POST ', response);
            self.newTodo = {completed: false};
            self.displayArray();
        }).catch(function (error) {
            console.log('error on POST ', error);
        })
    }//end createTodo
    self.deleteTodo = function (todoToDelete) {
        $http({
            method: 'DELETE',
            url: '/todo-route',
            params: todoToDelete
        }).then(function successCallback(response) {
            console.log('success on DELETE ', response);
            self.displayArray();
        }).catch(function (error) {
            console.log('error on DELETE ', error);
        })
    }//end deleteTodo
    self.completeTodo = function (todoToComplete) {
        todoToComplete.completed = true;
        $http({
            method: 'PUT',
            url: '/todo-route',
            data: todoToComplete
        }).then(function successCallback(response) {
            console.log('success on COMPLETE ', response);
            self.displayArray();
        }).catch(function (error) {
            console.log('error on COMPLETE ', error);
        })
    }//end createKoala
    self.displayArray();
}]) // end controller