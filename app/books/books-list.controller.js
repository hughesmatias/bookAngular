'use strict';

BooksAppController.controller("BooksListCtrl",["$scope", "$http","booksGetAll","authorsGetAll",
function ($scope, $http ,booksGetAll,authorsGetAll){
    var books = booksGetAll.query()
    .$promise.then(function(books){
      books.forEach(function(elem, index){
        var author = authorsGetAll.query({id:elem.author})
        .$promise.then(function(author){
          books[index].author = author[elem.author-1].name;
          $scope.books = books;
        });
      });
    });

    $scope.deleteBook = function(id){
      $http.delete("http://localhost:8000/books/"+ id).success(function(data){
        $("#tr-book-"+id).remove();
      });
    };
}]);
