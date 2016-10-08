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
        product: '='
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
    function CardController($scope, toastr, Basket) {
      var vm = this;
      vm.count = 1;

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
          id: vm.product._id
        });
      };
    }
  }

})();
