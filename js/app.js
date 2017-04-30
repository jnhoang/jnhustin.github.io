angular
.module('Portfolio', ['smoothScroll'])
.controller('HomeCtrl', [
  '$scope'
, 'smoothScroll'
, function($scope, smoothScroll) {
    $scope.projectData = projectData;
    $scope.skills = skills;
    $scope.visible = false;


    for (var section in skills) {
      var section = skills[section];
      for (var i = 0; i < section.length - 1; i++) {
        section[i] += ', ';
      }
    }


  }
])