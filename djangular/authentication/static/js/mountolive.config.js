(function() {

  'use strict';

  angular
    .module('mountolive.config').config(config)

  config.$inject = ['$locationProvider']

  /**
  * @name config
  * @desc Enable HTML5 routing
  */

  function($locationProvider) {

    $locationProvider.html5Mode(true);
    $locationProvider.hasPrefix('!');

  }
})();