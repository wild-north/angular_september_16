(function() {
  'use strict';

  angular
    .module('yeoman')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

        .state('products', {
          url: '/products',
          template: "<ui-view />",
          redirectTo: 'products.main'
        })
        .state('products.main', {
          url: '/',
          templateUrl: 'app/products/index.html',
          controller: 'ProductsController',
          controllerAs: 'productsCtrl'
        })
        .state('products.details', {
          url: '/:id',
          templateUrl: 'app/products/details/index.html',
          controller: 'ProductDetailsController',
          controllerAs: 'prDetCtrl'
        })

      .state('basket', {
        url: '/basket',
        templateUrl: 'app/basket/index.html',
        controller: 'BasketController',
        controllerAs: 'basketCtrl'
      });

      $urlRouterProvider.otherwise('/products/');

    });

})();