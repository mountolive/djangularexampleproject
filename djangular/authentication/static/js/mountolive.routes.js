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
      templateUrl: '/static/templates/register.html'
    }).when('/login',{
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/login.html'
    }).otherwise('/').when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/index.html'
    }).when('/+:username', {
      controller: 'ProfileController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profile.html'
    }).when('/+:username/settings', {
      controller: 'ProfileSettingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/settings.html'
})

  }

})();