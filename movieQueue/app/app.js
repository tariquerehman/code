"use strict";
(function(angular){
	var movieQueue = angular.module("movieQueue", ["ui.router"]);
	
	movieQueue.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/movieSearch");
		$stateProvider
			.state("myQueue", { 
			url: "/myQueue", 
			templateUrl: "components/myQueue/myQueue.html",
			controller: "myQueueCtrl"
			}) 
			.state("movieSearch", { 
				url: "/movieSearch",
				templateUrl: "components/movieSearch/movieSearch.html",
				controller: "movieSearchCtrl"
			})
		}
	);
})(angular);

