'use strict';

var BooksAppController = angular.module('BooksAppController', []);
var BookAppServices = angular.module('BookAppServices', ['ngResource']);

var booksApp = angular.module("booksApp",[
  "ngRoute",
  "BooksAppController",
  "BookAppServices"
]);

booksApp.config (['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when("/books/list",{
      templateUrl : "books/partials/books-list.html",
      controller: "BooksListCtrl"
    }).when("/bookDetail/:id",{
      templateUrl : "books/partials/book-detail.html",
      controller: "BookDetailCtrl"
    }).when("/books/new",{
      templateUrl : "books/partials/book-detail.html",
      controller : "BookCreateCtrl"
    }).when("/authors/list",{
      templateUrl : "authors/partials/authors-list.html",
      controller: "AuthorsListCtrl"
    }).when("/authors/new",{
      templateUrl : "authors/partials/author-detail.html",
      controller : "AuthorCreateCtrl"
    }).when("/authors/:id",{
      templateUrl : "authors/partials/author-detail.html",
      controller : "AuthorDetailCtrl"
    }).otherwise({
      redirectTo: "/books/list"
    });
  }]);
