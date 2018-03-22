/**
* Post
* @namespace mountolive.posts.directives
*/
(function () {
  'use strict';

  angular
    .module('mountolive.posts.directives')
    .directive('post', post);

  /**
  * @namespace Post
  */
  function post() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf mountolive.posts.directives.Post
    */
    var directive = {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: '/static/templates/post.html'
    };

    return directive;
  }
})();