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
      .when('/basket', {
        templateUrl: 'app/basket/index.html',
        controller: 'BasketController',
        controllerAs: 'basket'
      })
      .otherwise({
        redirectTo: '/products'
      });
  });

})();
