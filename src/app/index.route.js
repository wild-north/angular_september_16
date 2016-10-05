(function() {
  'use strict';

  angular
    .module('yeoman')
    .config(function ($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'app/products/index.html',
        controller: 'ProductsController',
        controllerAs: 'products'
      })
      .otherwise({
        redirectTo: '/products'
      });
  });

})();
