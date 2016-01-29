'use strict';

BooksAppController.controller("BooksListCtrl",["$scope", "$http","booksGetAll","authorsGet",
function ($scope, $http ,booksGetAll,authorsGet){
    var books = booksGetAll.query();

    books.forEach(function(elem, index){
      var author = authorsGet.query(elem.author);
      books[index].author = author;
    });

    $scope.books = books;
    $scope.deleteBook = function(id){
      $http.delete("http://localhost:8000/books/"+ id).success(function(data){
        $("#tr-book-"+id).remove();
      });
    };
}]);
