
"use strict";
(function(angular){
	var movieQueue = angular.module("movieQueue");
	
	movieQueue.controller("myQueueCtrl", function($scope, MovieQueueService){
		var movieQueueService = new MovieQueueService();
	
		$scope.movies = movieQueueService.getQueue();
	});
})(angular);