(function() {
  'use strict';

  angular
    .module('yeoman')
    .service('ProductsAPI', Service);

  /** @ngInject */
  function Service($http, $q, $resource) {

    var products = [];

  	this.getAll = function() {
      var url = '/app/json/:fileName';
      // music_store.json
      var d = $q.defer();
      if (products.length) {
        d.resolve(products);
      } else {
        var res = $resource(url, {}, {
          getProducts: {
            method: 'GET',
            isArray: true
          },
          addProduct: {
            method: 'POST',
            isArray: true,
            params: {
              fileName: '@file'
            }
          }
        });


        // res.addProduct({ }, {id: 9999, text: 'lorem', file: 'music_store.json'})

        res.getProducts({
          fileName: 'music_store.json'
        })
        .$promise
        .then(function(data) {
          data = JSON.parse(JSON.stringify(data));
          d.resolve(data);
        });

        // $http({
        //   method: 'GET',
        //   url: url
        // })
        // .then(function(response) {
        //   products = response.data;
        //   d.resolve(products);
        // });
      }
      return d.promise;
  	};

  }
})();