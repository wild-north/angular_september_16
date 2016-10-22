(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('BasketController', BasketController);

  /** @ngInject */
  function BasketController($q) {
    var vm = this;


    function getMyData () {
    	var defer = $q.defer();
    	setTimeout(function() {
    		console.log(12123);
    		defer.resolve('some data');
    	}, 1000);
    	return defer.promise;
    }

		getMyData().then(function(data) {
			return data;
		}).then(function(newData) {
			console.log(newData);
		});




  }
})();