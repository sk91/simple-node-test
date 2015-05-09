'use strict';

angular.module('simple-node-test')
  .controller('LoginCtrl', function ($scope,$http,$location) {
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

      if(!$scope.password || $scope.password.length < 2){
        $scope.password_error = true;
      }else{
        $scope.password_error = false;
      }

      if(!$scope.password_error  && !$scope.email_error){
        $http.post('/session',{
            email:$scope.email,
            password:$scope.password
        }).success(function(){
              $location.path('/user_profile');
          });
      }
    }
  });
