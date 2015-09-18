var movieQueue = angular.module("movieQueue", ["ui.router"]);

movieQueue.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/movieSearch");
	$stateProvider
	  	.state("movieList", { 
	    url: "/movieList", 
	    templateUrl: "components/movieList/movieList.html",
	    controller: "movieListCtrl"
		}) 
	  	.state("movieSearch", { 
			url: "/movieSearch",
		    templateUrl: "components/movieSearch/movieSearch.html",
		    controller: "movieSearchCtrl"
		})
	}
);

movieQueue.controller("movieListCtrl", function($scope){
	$scope.testing = "list";
})

movieQueue.controller("movieSearchCtrl", function($scope){
	$scope.testing = "search";
})