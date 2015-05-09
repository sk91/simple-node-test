(function(angular){
  'use strict';

  angular.module('simple-node-test', [
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
