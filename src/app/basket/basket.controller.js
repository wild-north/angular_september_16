(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('BasketController', BasketController);

  /** @ngInject */
  function BasketController(Basket, ProductsAPI) {
    var vm = this;

    ProductsAPI.getAll().then(function(data) {
      vm.productsList = data;
      console.log(data);
    });

    vm.basket = Basket.get();
    var ids = vm.basket.map(function(element) {
      return element.id;
    });
    console.log(ids);
    console.log(vm.basket);

  }
})();