(function() {
  'use strict';

  angular
    .module('yeoman')
    .service('ProductsAPI', Service);

  /** @ngInject */
  function Service($http, $q) {

    var products = [];

  	this.getAll = function() {
      var d = $q.defer();
      if (products.length) {
        d.resolve(products);
      } else {
        $http({
          method: 'GET',
          url: '/app/json/music_store.json'
        })
        .then(function(response) {
          products = response.data;
          d.resolve(products);
        });
      }
      return d.promise;
  	};

  }
})();