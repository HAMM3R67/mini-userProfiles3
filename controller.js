var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers().then(function(users) {
      $scope.users = users;
    });
  }

  $scope.getUsers();

});
