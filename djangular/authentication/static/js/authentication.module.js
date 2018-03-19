(function () {
  'use strict';

  angular
    .module('mountolive.authentication', [
      'mountolive.authentication.controllers',
      'mountolive.authentication.services'
    ]);

  angular
    .module('mountolive.authentication.controllers', []);

  angular
    .module('mountolive.authentication.services', ['ngCookies']);
})();