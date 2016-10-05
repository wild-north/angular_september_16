(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('ProductsController', ProductsController);

  /** @ngInject */
  function ProductsController($scope, toastr, ProductsAPI) {
    var vm = this;

    $scope.user = {
    	name: 'Иван Иванов'
    };

    ProductsAPI
    	.getAll()
    	.then(function(response) {
    		// response.data
    	});

  }
})();