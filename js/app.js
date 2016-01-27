'use strict';

var booksApp = angular.module("booksApp",[
  "ngRoute",
  "BooksAppController"
]);

booksApp.config (['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when("/books/list",{
      templateUrl : "partials/books-list.html",
      controller: "BooksListCtrl"
    }).when("/bookDetail/:id",{
      templateUrl : "partials/book-detail.html",
      controller: "BookDetailCtrl"
    }).when("/books/new",{
      templateUrl : "partials/book-detail.html",
      controller : "BookCreateCtrl"
    }).when("/authors/list",{
      templateUrl : "partials/authors-list.html",
      controller: "AuthorsListCtrl"
    }).when("/authors/new",{
      templateUrl : "partials/author-detail.html",
      controller : "AuthorCreateCtrl"
    }).when("/authors/:id",{
      templateUrl : "partials/author-detail.html",
      controller : "AuthorDetailCtrl"
    }).otherwise({
      redirectTo: "/books/list"
    });
  }]);
