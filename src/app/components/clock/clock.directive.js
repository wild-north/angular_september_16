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
        alarm: '@',
      },
      controller: ClockController
    };

    return directive;

    /** @ngInject */
    function ClockController($scope, $interval, $localStorage) {

      function setStorage(data) {
        var tmpDate = new Date();
        tmpDate.setMinutes(tmpDate.getMinutes() + 1);

        var local = {
          data: data || { name: 'Vasya' },
          expire: +tmpDate
        };
        $localStorage.angular_sept_16 = local;
      }

      if ('angular_sept_16' in $localStorage) {

        if ((new Date() - $localStorage.angular_sept_16.expire) > 0) {
          delete $localStorage.angular_sept_16;
          console.log('$localStorage.angular_sept_16 was expired');
        }
      } else {
        setStorage({
          name: 'angularjs'
        });
      }

      $scope.currentTime = new Date();

      var alarm = {
        hours: $scope.alarm.split(':')[0],
        minutes: $scope.alarm.split(':')[1],
        flag: false
      };
      console.log(alarm);

      $interval(function() {
        $scope.currentTime = new Date();
        checkIfAlarm();
      }, 1000);

      function checkIfAlarm() {
        if (!$scope.alarm || alarm.flag) return;

        if ($scope.currentTime.getHours() == alarm.hours &&
            $scope.currentTime.getMinutes() == alarm.minutes) {
          alarm.flag = !alarm.flag;
          alert('Дзылинь!');
        }
      }

      function local(value) {
        if (value) {
          return localStorage.alarmFlag;
        } else {
          localStorage.alarmFlag = value;
        }
      }

    }
  }

})();













