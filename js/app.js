angular
.module('Portfolio', [])
.controller('HomeCtrl', [
  '$scope'
, function($scope) {
    $scope.projectData = projectData;
    $scope.skills = skills;
  }
])