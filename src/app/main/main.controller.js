(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, toastr) {
    var vm = this;

    $scope.showDate = function() {
    	console.log($scope.alarmDate);
    };

    // $scope.alarmDate = new Date();

  }
})();