(function() {
  'use strict';

  angular.module('yeoman')
	  /* sets spaces after each 000 */
		.filter('priceViewFormat', function() {
			return function(value, fractionSize, currency, showAsPrefix) {

				currency = currency || '$';
				fractionSize = typeof fractionSize == 'number' ? fractionSize : 2;
				showAsPrefix = typeof showAsPrefix == 'boolean' ? showAsPrefix : true;

				value = value.toFixed(fractionSize);

				value = showAsPrefix ? currency + ' ' + value : value + ' ' + currency;

				return value.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			};
		});

})();
