(function() {
  'use strict';

  angular
    .module('yeoman')
    .config(function(USER_ROLES, $stateProvider, $urlRouterProvider) {

      $stateProvider

      /* products */
      .state('products', {
        url: '/products',
        template: "<ui-view />",
        redirectTo: 'products.main',
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
      })
      .state('products.main', {
        url: '/',
        templateUrl: 'app/products/index.html',
        controller: 'ProductsController',
        controllerAs: 'productsCtrl',
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
      })
      .state('products.details', {
        url: '/:id',
        templateUrl: 'app/products/details/index.html',
        controller: 'ProductDetailsController',
        controllerAs: 'prDetCtrl',
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
      })

      /* basket */
      .state('basket', {
        url: '/basket',
        templateUrl: 'app/basket/index.html',
        controller: 'BasketController',
        controllerAs: 'basketCtrl',
        data: {
          authorizedRoles: [USER_ROLES.admin]
        }
      })

      /* basket */
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl',
        data: {
          // authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest]
        }
      });

      $urlRouterProvider.otherwise('/products/');

    });

})();