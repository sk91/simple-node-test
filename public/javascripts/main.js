(function(angular){
  'use strict';

  angular.module('embraase', [
    'ngRoute'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'user_profile.html',
        controller:'UserProfileCtrl'
      })
      .when('/login',{
        templateUrl:'login.html',
        controller:'LoginCtrl'
      })
      .when('/sign_up',{
        templateUrl:'sign_up.html',
        controller:'SignUpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})(angular)