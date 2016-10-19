(function() {
  'use strict';

  angular
    .module('yeoman')
    .directive('basket', BasketDirective);

  /** @ngInject */
  function BasketDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/basket/basket.html',
      scope: {},
      controller: BasketController,
      controllerAs: 'basketCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function BasketController($scope, Basket, BasketEvents, userConfig) {
      var vm = this;
      vm.currency = userConfig.CURRENCY;

      $scope.$on(BasketEvents.UPDATED, function(e) {
        // vm.basket = data;
        vm.basket = Basket.get();
        vm.totalGoods = Basket.totalGoods;
        vm.totalCost = Basket.totalCost;
      });

      // Basket.subscribe(function(data) {
      //   vm.basket = data;
      //   vm.totalGoods = Basket.totalGoods;
      //   vm.totalCost = Basket.totalCost;
      // });

      vm.basket = Basket.get();
    }
  }

})();
