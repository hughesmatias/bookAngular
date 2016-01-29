'use strict';

BooksAppController.controller("AuthorsListCtrl",["$scope","$http","authorsGetAll",
function($scope, $http , authorsGetAll){
  $scope.authors = authorsGetAll.query();
  $scope.deleteAuthor = function(id){
    $http.delete("http://localhost:8000/authors/"+id).success(function(data){
      $("#tr-author-"+id).remove();
    });
  };
}]);
