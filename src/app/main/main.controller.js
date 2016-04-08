(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.pageList = [
      {page:1, description:"This is a page", url: "page1"},
      {page:2, description:"This is a page", url: "page2"},
      {page:3, description:"This is a page", url: "page3"}

    ]

  }
})();
