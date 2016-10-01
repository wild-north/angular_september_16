(function() {
  'use strict';

  angular
    .module('yeoman')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
