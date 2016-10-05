(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('ProductsController', ProductsController);

  /** @ngInject */
  function ProductsController($scope, toastr, ProductsAPI) {
    var vm = this;


    vm.user = 'Иван Иванов';


    ProductsAPI
    	.getAll()
    	.then(function(response) {
    		vm.items = response.data;
    	});

  }
})();