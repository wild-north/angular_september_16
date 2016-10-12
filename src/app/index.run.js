(function() {
  'use strict';

  angular
    .module('yeoman')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');

  }

})();
