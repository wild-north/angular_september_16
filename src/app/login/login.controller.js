(function() {
	"use scrict";

	angular.module('yeoman')
		.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController($scope, $rootScope, AuthService, AUTH_EVENTS) {
		$scope.credentials = {
			username: 'admin',
			password: 'admin'
		};
		$scope.login = function (credentials) {
			AuthService
			.login(credentials)
			.then(function (user) {
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				$scope.hello = 'Вы вошли!';
			}, function () {
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
			});
		};
	}
})();