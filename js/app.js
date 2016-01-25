'use strict';

var booksApp = angular.module("booksApp",[
  "ngRoute",
  "BooksAppController"
]);

booksApp.config (['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when("/booksList",{
      templateUrl : "partials/book-list.html",
      controller: "BooksListCtrl"
    }).when("/bookDetail/:id",{
      templateUrl : "partials/book-detail.html",
      controller: "BookDetailCtrl"
    }).when("/bookCreate",{
      templateUrl : "partials/book-detail.html",
      controller : "BookCreateCtrl"
    }).otherwise({
      redirectTo: "/booksList"
    });
  }]);
