'use strict';

BooksAppController.controller("AuthorCreateCtrl",["$scope","$http","$location",
function ($scope,$http,$location){
  $("#create-author h1").text("Formulario de Creacion Autor");
  $scope.submit = function(){
    var author = {"name" : $scope.author.name};
    $http.post("http://localhost:8000/authors",author).success(function(data){
      $location.path("/authors/list");
    });
  };
}]);
