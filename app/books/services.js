'use strict';

BookAppServices.factory("authorsGetAll", ["$resource",
function ($resource){
  return $resource("http://localhost:8000/authors/", {}, {
    get: { method: "GET", isArray: true }
  });
}]);

BookAppServices.factory("authorsGet", ["$resource",
function ($resource){
  return $resource("http://localhost:8000/authors/:id",{
    query: {method: "GET", params:{id:'@id'}, isArray: true ,cancellable: true}
  });
}]);

BookAppServices.factory("booksGetAll", ["$resource",
function ($resource){
  return $resource("http://localhost:8000/books/", {},{
    get : { method: "GET", isArray: true}
  });
}]);

BookAppServices.factory("booksGet", ["$resource",
function($resource){
  return $resource("http://localhost:8000/books/:id",{id: "@id"},{
    query : {method : "GET", isArray: true , cancellable: true}
  })
}]);
