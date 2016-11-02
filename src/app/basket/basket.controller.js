(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('BasketController', BasketController);

  /** @ngInject */
  function BasketController($scope, Basket, ProductsAPI) {
    var vm = this;


    // $scope.formData = {
    //   email:  '',
    //   pass:   ''
    // };
    // $scope.$watchCollection('formData', function(newVal, oldVal) {
    //   console.log($scope.Form.pass.$error);
    // });
    vm.basket = Basket.get();
    console.log(vm.basket);

    vm.productsInBasket = [];
    ProductsAPI.getAll().then(function(data) {
      vm.productsList = data;
      angular.forEach(data, function (value, index) {
        var found = vm.basket.find(function(bsk) {
          return bsk.id == value._id;
        });
        console.log(found);
        if ( found ) {
          var newO = Object.assign({}, value, {count: found.count});
          console.log(newO );
          vm.productsInBasket.push(newO);
        }
      });
      // console.log(vm.productsInBasket);
    });

    

  }
})();