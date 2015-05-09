'use strict';

angular.module('simple-node-test')
  .controller('UserProfileCtrl', function ($scope,$http,$location) {
    $scope.user = $http.get('session').success(function(data){
        if('logout' in data){
          return $location.path('/login');
        }
        $scope.user = data;
    });
  });
