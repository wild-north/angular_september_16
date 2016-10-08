(function() {
  'use strict';

  angular
    .module('yeoman')
    .service('Basket', BasketService);

  /** @ngInject */
  function BasketService() {
  	var basket = [];

  	var notifications = [];

  	this.subscribe = function(callback) {
  		if (notifications.indexOf(callback) == -1) {
  			notifications.push(callback);
  		}
  	};

  	this.notify = function() {
  		notifications.forEach(function(callback) {
  			if (typeof callback == 'function') {
  				callback(basket);
  			}
  		});
  	};


    this.add = function(item) {
    	var index = findInBasket(item.id);
    	if (index === -1) {
	    	basket.push(item);
    	} else {
    		basket[index].count += item.count;
    	}
    	this.notify();
    };

    this.get = function() {
    	return basket;
    };

    this.remove = function(id) {
    	var index = findInBasket(item.id);
    	if (index !== -1) {
    		basket.splice(index, 1);
	    	this.notify();
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