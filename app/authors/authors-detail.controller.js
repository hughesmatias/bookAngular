'use strict';

BooksAppController.controller("AuthorDetailCtrl",["$scope","$http","$routeParams","$location",
function($scope,$http,$routeParams,$location) {
  $("#create-author h1").text("Formulario de Edicion Autor");
  $http.get("http://localhost:8000/authors/"+$routeParams.id).success(function(data) {
    $scope.author = data;
  });
  $scope.submit = function(){
    $http.put("http://localhost:8000/authors/"+$scope.author.id,$scope.author).success(function(){
      $location.path("/authors/list");
    });
  };
}]);
