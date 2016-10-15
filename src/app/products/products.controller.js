(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('ProductsController', ProductsController);

  /** @ngInject */
  function ProductsController($scope, $state, $stateParams, toastr, ProductsAPI) {
    var vm = this;

    vm.stateName = $state.current.name;
    $scope.$state = $state;

    vm.user = 'Иван Иванов';


    ProductsAPI
    	.getAll()
    	.then(function(response) {
    		vm.items = response.data;
    	});

    $scope.clickMe = function(argument) {
      console.log('click!!!');
    };



  }
})();