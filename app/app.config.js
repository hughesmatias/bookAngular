booksApp.config (['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when("/books/list",{
      templateUrl : "books/books-list.html",
      controller: "BooksListCtrl"
    }).when("/bookDetail/:id",{
      templateUrl : "books/books-detail.html",
      controller: "BookDetailCtrl"
    }).when("/books/new",{
      templateUrl : "books/books-detail.html",
      controller : "BookCreateCtrl"
    }).when("/authors/list",{
      templateUrl : "authors/authors-list.html",
      controller: "AuthorsListCtrl"
    }).when("/authors/new",{
      templateUrl : "authors/authors-detail.html",
      controller : "AuthorCreateCtrl"
    }).when("/authors/:id",{
      templateUrl : "authors/authors-detail.html",
      controller : "AuthorDetailCtrl"
    }).otherwise({
      redirectTo: "/books/list"
    });
  }]);
