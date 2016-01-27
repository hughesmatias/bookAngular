'use strict';

var BooksAppController = angular.module('BooksAppController', []);

BooksAppController.controller("BooksListCtrl",["$scope" , "$http",
function ($scope, $http){
  $http.get("http://localhost:8000/books").success(function(data) {
    var books = data;
    books.forEach(function(elem, index){
      $http.get("http://localhost:8000/authors/"+ elem.author ).success(function(author){
        books[index].author = author.name;
    })});
    $scope.books = data;
  });
}]);

BooksAppController.controller("BookDetailCtrl",["$scope","$http","$routeParams",
function ($scope, $http ,$routeParams){
  $("#create-book h1").text("Formulario de Edicion");
  $http.get("http://localhost:8000/books/"+ $routeParams.id ).success(function(data){
    var book = data;
    $scope.title = book.title;
    $scope.author = book.author;
    $scope.pagesAmount = book.pagesAmount;
    //$scope.selected = book.author
  });
}]);

BooksAppController.controller("BookCreateCtrl",["$scope","$http",
function($scope,$http){
  $("#create-book h1").text("Formulario de Creacion");

  $scope.submit = function(){
    var book = {
      "title": $scope.title,
      "author": $scope.author,
      "pagesAmount": $scope.pagesAmount
    };
    console.log(JSON.stringify(book));
    $http.post("http://localhost:8000/books", book).success(function (data) {
      window.location = "#/books/list";
    });
  };
}]);

BooksAppController.controller("AuthorsListCtrl",["$scope","$http",
function($scope,$http){
  $http.get("http://localhost:8000/authors").success(function(data){
    $scope.authors = data;
  });
}]);

BooksAppController.controller("AuthorDetailCtrl",["$scope","$http","$routeParams",
function($scope,$http,$routeParams) {
  $("#create-author h1").text("Formulario de Edicion");
  $http.get("http://localhost:8000/authors/"+$routeParams.id).success(function(data) {
    var author = data;
    $scope.idAuthor=author.id;
    $scope.nameAuthor=author.name;
  })
}])

// BooksAppController.controller("BookDeleteCtrl",["$scope","$http",
// function ($scope,$http){
//
// }]);
