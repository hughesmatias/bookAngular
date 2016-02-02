'use strict';

BooksAppController.controller("BookDetailCtrl",["$scope","$http","$routeParams","booksGet",
function ($scope, $http ,$routeParams,booksGet){
  $("#create-book h1").text("Formulario de Edicion Libro");
  $http.get("http://localhost:8000/books/"+ $routeParams.id ).success(function(data){
    $scope.book = data;
    $("#authorSelect option:selected").text($scope.book.author);
  });

  $scope.submit = function(){
    $scope.book.author = $scope.book.author.name;
    $http.put("http://localhost:8000/books/"+$scope.id,$scope.book).success(function(){
      window.location = "#/books/list";
    });
  };
}]);
