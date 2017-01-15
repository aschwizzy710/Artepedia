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
          templateUrl: 'html/views/login.html',
          controller: "LoginController",
          access: {
            restricted: false
          }
        })
        .when('/signup', {
          templateUrl: 'html/views/signup.html',
          controller: 'SignUpController',
          access: {
            restricted: false
          }
        })
        .when('/profile/:username', {
          templateUrl: 'html/views/profile.html',
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
