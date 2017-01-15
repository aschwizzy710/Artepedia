(function() {
  angular.module('ArtePedia')
    .directive('navigation', NavigationDirective);

    NavigationDirective.$inject = [];

    function NavigationDirective(){
      return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'js/directives/navigation/navigation.view.html',
        controller: 'NavigationController'
      }
    }

}());
