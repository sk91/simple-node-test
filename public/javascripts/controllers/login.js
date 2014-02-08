'use strict';

angular.module('embraase')
  .controller('LoginCtrl', function ($scope) {
    $scope.email = '';
    $scope.email_error = false;
    $scope.password = '';
    $scope.password_error = false;

    $scope.login = function(){
      if(!$scope.email || $scope.email.indexOf('@') <= 0){
        $scope.email_error = true;
      }else{
        $scope.email_error = false;
      }

      if(!$scope.password || $scope.password.length < 5){
        $scope.password_error = true;
      }else{
        $scope.password_error = false;
      }
    }
  });
