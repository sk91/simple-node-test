'use strict';

angular.module('embraase')
  .controller('SignUpCtrl', function ($scope,$http,$location) {
    $scope.email = '';
    $scope.email_error = false;
    $scope.password = '';
    $scope.password_error = false;
    $scope.confirm_password = '';
    $scope.confirm_password_error = false;

    $scope.signup = function(){
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

      if(!$scope.confirm_password || $scope.confirm_password !== $scope.password ){
        $scope.confirm_password_error = true;
      }else{
        $scope.confirm_password_error = false;
      }

      if(!$scope.password_error  && !$scope.email_error && !confirm_password_error){
        $http.post('/users',{
            email:$scope.email,
            password:$scope.password
         }).success(function(){
            $http.post('session',{
              email:$scope.email,
              password:$scope.password
            }).success(function(){
              $location.path('/user_profile');
            })
         });
      }
    }
  });
