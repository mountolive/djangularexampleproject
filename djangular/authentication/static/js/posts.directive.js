/**
* Posts
* @namespace mountolive.posts.directives
*/
(function () {
  'use strict';

  angular
    .module('mountolive.posts.directives')
    .directive('posts', posts);

  /**
  * @namespace Posts
  */
  function posts() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf mountolive.posts.directives.Posts
    */
    var directive = {
      controller: 'PostsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        posts: '='
      },
      templateUrl: '/static/templates/posts.html'
    };

    return directive;
  }
})();