(function() {
  angular.module('ArtePedia')
    .config(RouterConfiguration);

    RouterConfiguration.$inject = ['$routeProvider'];

    function RouterConfiguration($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'html/index.html',
          controller: "MainController",
          access: {
            restricted: false
          }
        })
        .when('/login', {
          templateUrl: 'html/login.html',
          controller: "LoginController",
          access: {
            restricted: false
          }
        })
        .when('/signup', {
          templateUrl: 'html/signup.html',
          controller: 'SignUpController',
          access: {
            restricted: false
          }
        })
        .when('/profile', {
          templateUrl: 'html/profile.html',
          controller: 'ProfileController',
          access: {
            restricted: true
          }
        })
        .otherwise({
          redirectTo: '/',
          access:{
            restricted: false
          }
        })
    }
}());
