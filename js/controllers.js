'use strict';

var BooksAppController = angular.module('BooksAppController', []);

BooksAppController.controller("BooksListCtrl",["$scope" , "$http",
function ($scope, $http){
  $http.get("http://localhost:8000/books").success(function(data) {
    $scope.books = data;
  });
}]);

BooksAppController.controller("BookDetailCtrl",["$scope","$http","$routeParams",
function ($scope, $http ,$routeParams){
  $("#create-book h1").text("Formulario de Edicion");
  $http.get("http://localhost:8000/books/"+ $routeParams.id ).success(function(data){
    $scope.book = data;
  });
}]);

BooksAppController.controller("BookCreateCtrl",["$scope","$http",
function($scope,$http){
  $("#create-book h1").text("Formulario de Creacion");

  $scope.submit = function(){
    $scope.book =
    {
      "title" : $("#title").val(),
      "author" : $("#author").val(),
      "pagesAmount" : $("#pagesAmount").val()
    };
    console.log($scope.book);
    $http.post("http://localhost:8000/books/",JSON.stringify($scope.book));
  };
}]);
