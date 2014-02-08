'use strict';

angular.module('embraase')
  .controller('UserProfileCtrl', function ($scope,$http) {
    $scope.user = $http.get('session').success(function(data){
        $scope.user = data;
    });
  });
