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
    $scope.deleteBook = function(id){
      $http.delete("http://localhost:8000/books/"+ id).success(function(data){
        $("#tr-book-"+id).remove();
      });
    };
  });
}]);

BooksAppController.controller("BookDetailCtrl",["$scope","$http","$routeParams",
function ($scope, $http ,$routeParams){
  $("#create-book h1").text("Formulario de Edicion Libro");
  $http.get("http://localhost:8000/books/"+ $routeParams.id ).success(function(data){
    $scope.book = data;
    $("#authorSelect option:selected").text($scope.book.author);

    $scope.submit = function(){
      $scope.book.author = $scope.book.author.name;
      console.log($scope.book);
      $http.put("http://localhost:8000/books/"+$scope.id,$scope.book).success(function(){
        window.location = "#/books/list";
      });
    };
  });
}]);

BooksAppController.controller("BookCreateCtrl",["$scope","$http",
function($scope,$http){
  $("#create-book h1").text("Formulario de Creacion Libro");
  $scope.submit = function(){
    var book = $scope.book;
    book.author = $scope.book.author.name;
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
  $scope.deleteAuthor = function(id){
    $http.delete("http://localhost:8000/authors/"+id).success(function(data){
      $("#tr-author-"+id).remove();
    });
  };
}]);

BooksAppController.controller("AuthorDetailCtrl",["$scope","$http","$routeParams",
function($scope,$http,$routeParams) {
  $("#create-author h1").text("Formulario de Edicion Autor");
  $http.get("http://localhost:8000/authors/"+$routeParams.id).success(function(data) {
    $scope.author = data;
  });
  $scope.submit = function(){
    $http.put("http://localhost:8000/authors/"+$scope.author.id,$scope.author).success(function(){
      window.location = "#/authors/list";
    });
  };
}]);

BooksAppController.controller("AuthorCreateCtrl",["$scope","$http",
function ($scope,$http){
  $("#create-author h1").text("Formulario de Creacion Autor");
  $scope.submit = function(){
    var author = {"name" : $scope.author.name};
    $http.post("http://localhost:8000/authors",author).success(function(data){
      window.location = "#/authors/list";
    });
  };
}]);
