angular
.module('Portfolio', [])
.controller('HomeCtrl', [
  '$scope'
, function($scope) {
    $scope.projectData = projectData;
    $scope.skills = skills;

    for (var section in skills) {
      var section = skills[section];
      for (var i = 0; i < section.length - 1; i++) {
        section[i] += ', ';
      }
    }
  }
])