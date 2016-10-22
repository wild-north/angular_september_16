(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('ProductsController', ProductsController);

  /** @ngInject */
  function ProductsController($scope, $state, $stateParams, toastr, productsList, ProductsAPI) {
    var vm = this;

    console.log(productsList);
    vm.items = productsList;

    vm.stateName = $state.current.name;
    $scope.$state = $state;

    vm.user = 'Иван Иванов';

    // ProductsAPI
    // 	.getAll()
    // 	.then(function(data) {
    // 		vm.items = data;
    // 	});

    $scope.clickMe = function(argument) {
      console.log('click!!!');
    };



  }
})();