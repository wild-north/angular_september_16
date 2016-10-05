(function() {
  'use strict';

  angular
    .module('yeoman')
    .directive('clock', clockDirective);

  /** @ngInject */
  function clockDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/clock/clock.html',
      scope: {
        timeFormat: '@format',
        alarm: '=',
        clockId: '@',
      },
      controller: ClockController
    };

    return directive;

    /** @ngInject */
    function ClockController($scope, $interval, $localStorage) {
      var alarmConfig;
      $scope.currentTime = new Date();

      function setStorage(name, data) {
        $localStorage[name] = data;
      }

      $scope.$watch('alarm', function(newVal, oldVal) {
        initAlarm();
      });

      function initAlarm() {
        if ($scope.alarm) {
          alarmConfig = {
            hours: $scope.alarm.split(':')[0],
            minutes: $scope.alarm.split(':')[1]
          };
          setStorage($scope.clockId, alarmConfig);
        } else if($localStorage[$scope.clockId]) {
          alarmConfig = $localStorage[$scope.clockId];
          $scope.alarm = alarmConfig.hours + ':' + alarmConfig.minutes;
        }

      }
      initAlarm();

      $interval(function() {
        $scope.currentTime = new Date();
        checkIfAlarm();
      }, 1000);

      function checkIfAlarm() {
        if (!$scope.alarm) return;

        if ($scope.currentTime.getHours() == alarmConfig.hours &&
            $scope.currentTime.getMinutes() == alarmConfig.minutes &&
            $scope.currentTime.getSeconds() === 0 ) {

          setStorage(alarmConfig);
          alert('Дзылинь!');
        }
      }

    }
  }

})();













