(function() {
	"use scrict";
	angular.module('yeoman')
		.controller('ProductDetailsController', function($scope, $stateParams){
			console.log($stateParams);

			$scope.id = $stateParams.id;
		});
})();