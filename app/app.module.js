'use strict';

var BooksAppController = angular.module('BooksAppController', []);
var BookAppServices = angular.module('BookAppServices', ['ngResource']);

var booksApp = angular.module("booksApp",[
  "ngRoute",
  "BooksAppController",
  "BookAppServices"
]);
