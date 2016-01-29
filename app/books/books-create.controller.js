'use strict';

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
