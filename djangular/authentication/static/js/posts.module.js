(function (){

  'use strict';

  angular
    .module('mountolive.posts', [
      'mountolive.posts.controllers',
      'mountolive.posts.directives',
      'mountolive.posts.services'
    ]);

  angular
    .module('mountolive.posts.controllers', []);

  angular
    .module('mountolive.posts.directives', ['ngDialog']);

  angular
    .module('mountolive.posts.services', []);

})();