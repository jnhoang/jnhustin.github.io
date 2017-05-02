angular
.module('Portfolio', ['smoothScroll'])
.controller('HomeCtrl', [
  '$scope'
, 'smoothScroll'
, function($scope, smoothScroll) {
    $scope.projectData = projectData;
    $scope.skills = skills;
    $scope.visible = false;

    $scope.pauseOrPlay = function(e) {
      var video = angular.element(e.srcElement)[0];
      video.paused ? video.play() : video.pause();
      this.project.paused = video.paused ? true : false;
    }
    
    // Adds comma between list items for horizontal listing
    for (var section in skills) {
      var section = skills[section];
      for (var i = 0; i < section.length - 1; i++) {
        section[i] += ', ';
      }
    }


  }
])