(function() {
	"use scrict";

	angular.module('yeoman')
  .factory('AuthService', function ($http, $timeout, Session) {
    var authService = {};

    authService.login = function (credentials) {

      return $timeout(function() {
        var data = {
          sessionId: 1,
          user: {
            id: 7,
            role: 'admin'
          }
        };
        Session.create(data.sessionId, data.user.id, data.user.role);
        return data.user;
      }, 500);
    };

    authService.isAuthenticated = function () {
      return !!Session.userId;
    };

    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
  });
})();