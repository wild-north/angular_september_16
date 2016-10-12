/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('yeoman')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('userConfig', {
    	CURRENCY: '$',
    	LANG: 		'en', // en, ru, ua
    	ENV: 			'dev' // dev, prod
    });


})();
