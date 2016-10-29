(function() {
  'use strict';

  angular
    .module('yeoman')
    .directive('feature', Directive);

  /** @ngInject */
  function Directive() {
    return {
      template: '{{message}}',
      controller: function ($scope) {
        $scope.message = "привет!";
      },
      // compile: function compile(temaplateElement, templateAttrs) {
      //   console.log(temaplateElement[0]);
      //   debugger;
      //   return {
      //     pre: function (scope, element, attrs) {
      //       console.log(element[0]);
      //       debugger;
      //     },
      //     post: function(scope, element, attrs) {
      //       console.log(element[0]);
      //       debugger;
      //     }
      //   }
      // },
      link: function(scope, elem, attrs) {
        elem.on('click', function (e) {
          this.style.zoom = this.style.zoom ? '' : 1.2;
        });
        // scope.message += " я - фича";
      }
    };
  }

// корявое объяснение controllerAs

// scope: {
//   myAttr: '@'
// }

// function Ctrl($scope) {

//   // $scope.myAttr = 'some data';

//   this = {
//     name: 'Vasya',
//     // myAttr: 'some data'
//   };
//   $scope = {
//     my: this,
//   };

// }

// <div>{{my.name}}</div>


})();
