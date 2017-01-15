(function() {
  angular.module('ArtePedia')
    .controller("NavigationController", NavigationController);

  NavigationController.$inject = ['$scope', 'AuthService'];

  function NavigationController($scope, AuthService){
      $scope.isLoggedIn = AuthService.isLoggedIn;
      $scope.userId = AuthService.userId();
  }
}());
