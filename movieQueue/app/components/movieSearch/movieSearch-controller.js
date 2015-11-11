
"use strict";
(function(angular){
	var movieQueue = angular.module("movieQueue");

	movieQueue.controller("movieSearchCtrl", function($scope, MovieQueueService){
		var movieQueueService = new MovieQueueService();
		
		movieQueueService.getMovies().then(function(moviesResult){
			$scope.movies = moviesResult.data;
			$scope.pageSize = moviesResult.pageSize;
			$scope.totalResults = moviesResult.totalResults;
		});
		
		$scope.addToQueue = function(item){
			movieQueueService.addToQueue(item);
		};
		
		$scope.searchMovies = function() {
			movieQueueService.getMovies($scope.searchText).then(function(moviesResult){
				$scope.movies = moviesResult.data;
				$scope.pageSize = moviesResult.pageSize;
				$scope.totalResults = moviesResult.totalResults;
			});
		};
	})
})(angular);
