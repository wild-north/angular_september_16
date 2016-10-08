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
    function BasketController($scope, Basket) {
      var vm = this;

      Basket.subscribe(function(data) {
        vm.basket = data;
        console.log(data);
      });

      vm.basket = Basket.get();
    }
  }

})();
