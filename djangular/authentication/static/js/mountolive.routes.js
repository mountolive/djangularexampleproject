(function () {
  'use strict';

  angular
    .module('mountolive.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/templates/register.html'
    }).when('/login',{
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/templates/login.html'
    }).otherwise('/');

  }

})();