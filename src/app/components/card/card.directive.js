(function() {
  'use strict';

  angular
    .module('yeoman')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/card/card.html',
      scope: {
        product: '=',
        id: "@",
        mode: "@"
      },
      controller: CardController,
      // link: function(scope, $elem, attrs) {
        // console.log($elem[0]);
        // console.log(attrs);
      // },
      controllerAs: 'card',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CardController($scope, $state, toastr, Basket) {
      var vm = this;
      vm.count = 1;

      vm.mode = vm.mode || 'card';

      $scope.$watch('card.count', function() {
        if (vm.count < 0)
          vm.count = 0;
        else if (vm.count > vm.product.count)
          vm.count = vm.product.count;
      });

      // $scope.$watch(function() {
      //   return vm.count;
      // }, function() {
      //   console.log(vm.count);
      // });

      vm.buy = function() {
        toastr.success('Элемент был добавлен');
        Basket.add({
          count: vm.count,
          id: vm.product._id,
          cost: vm.product.cost
        });
      };

      vm.goToDetails = function(e) {
        if (e && typeof e.preventDefault == 'function') {
          e.preventDefault();
        }
        $state.go('products.details', {id: vm.id});
      };

    }
  }

})();
