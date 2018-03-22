(function () {
  'use strict';

  angular
    .module('mountolive', [
      'mountolive.config',
      'mountolive.routes',
      'mountolive.authentication',
      'mountolive.layout',
      'mountolive.posts',
      'mountolive.utils',
      'mountolive.profiles'
    ]);

  angular
    .module('mountolive.routes', ['ngRoute']);

  angular
    .module('mountolive.config',[]);

  angular
    .module('mountolive')
    .run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */

  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken'
  }

})();