
"use strict";
(function(angular){
	var movieQueue = angular.module("movieQueue");
	
	movieQueue.controller("myQueueCtrl", function($scope, MovieQueueService){
		var movieQueueService = new MovieQueueService();
	
		$scope.movies = movieQueueService.getQueue();
		
		$scope.removeFromQueue = function(item) {
			var index = $scope.movies.indexOf(item);
  			$scope.movies.splice(index, 1);
		}
	});
})(angular);