(function() {
  'use strict';

  angular
    .module('yeoman')
    .service('Basket', BasketService)
    .constant('BasketEvents', {
      UPDATED: 'basket-updated'
    });

  /** @ngInject */
  function BasketService($rootScope, BasketEvents) {
  	var basket = [];
    this.totalGoods = 0;
    this.totalCost = 0;


  	// var notifications = [];

  	// this.subscribe = function(callback) {
  	// 	if (typeof callback == 'function' && notifications.indexOf(callback) == -1) {
  	// 		notifications.push(callback);
  	// 	}
  	// };

  	// this.notify = function() {
  	// 	notifications.forEach(function(callback) {
			// 	callback(basket);
  	// 	});
  	// };

    var notify = function() {
      $rootScope.$broadcast(BasketEvents.UPDATED);
    };

    this.add = function(item) {
    	var index = findInBasket(item.id);
      var count = +item.count;
      var cost = +item.cost * count;
    	if (index === -1) {
	    	basket.push(item);
      } else {
        basket[index].count += count;
      }
      this.totalGoods += count;
      this.totalCost += cost;
    	notify();
    };

    this.get = function() {
    	return basket;
    };

    this.remove = function(id) {
    	var index = findInBasket(item.id);
    	if (index !== -1) {
    		basket.splice(index, 1);
        this.totalGoods -= +basket[index].count;
        this.totalCost -= +basket[index].cost;
	    	notify();
    	}
    };

    function findInBasket(id) {
    	for (var i = 0; i < basket.length; i++) {
    		if (basket[i].id === id) {
    			return i;
    		}
    	}
    	return -1;
    }

  }
})();