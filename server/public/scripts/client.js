console.log('js');

var app = angular.module('TodoApp', []);

app.controller('TodoController', ['$http',function ($http) {
    var self = this;
    self.newTodo = {};

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
            console.log('success on POST ', response.status);
            self.displayArray();
        }).catch(function (error) {
            console.log('error on POST ', error.status);
        })
    }//end createKoala
    self.deleteTodo = function (todoToDelete) {
        $http({
            method: 'DELETE',
            url: '/todo-route',
            params: todoToDelete
        }).then(function successCallback(response) {
            console.log('success on DELETE ', response.status);
            self.displayArray();
        }).catch(function (error) {
            console.log('error on DELETE ', error.status);
        })
    }//end createKoala
    self.displayArray();
}]) // end controller