angular
.module('Portfolio', ['smoothScroll'])
.controller('HomeCtrl', [
  '$scope'
, '$sce'
, 'smoothScroll'
, function($scope, $sce, smoothScroll) {

    $scope.projectData  = projectData;
    $scope.skills       = skills;
    $scope.resumeLink   = 'https://drive.google.com/file/d/0BxEYM4aqzQ9lQ0pBX2tqcVM4c2M/view'
    $scope.visible      = false;
    console.log($scope.resumeLink)
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