"use strict";
(function(angular){
	var movieQueue = angular.module("movieQueue");
	
	movieQueue.service("MovieQueueService", ["$http", "$q", function($http, $q){
		var myQueue = [];
		
		// constructor function
		var MovieQueueService = function() {
			
		};
		
		// retrieve movie list
		MovieQueueService.prototype.getMovies = function(searchTerm) {
			var deferred = $q.defer();
			var term = searchTerm || "";
			var queryPromise = $http.get("http://gowatchit.com/api/v3/search/movies?term=" + term, {
				headers: {"X-Api-Key": "d721bcee1c6896a4453ebde6"}
			});
			// using promise to handle data retrieval delays
			queryPromise.then(function(result){
				deferred.resolve({
					data: result.data.search.movies,
					totalResults: result.data.search.total_results,
					pageSize: result.data.search.paging.per_page
				});
			});
			return deferred.promise;
		};
		
		// get queue
		MovieQueueService.prototype.getQueue = function() {
			return myQueue;
		};
		
		// add to queue. 
		MovieQueueService.prototype.addToQueue = function(movie) {
			// error handling to check if the movie already exists
			try {
				myQueue.push(movie);
			}
			catch(e) {
				console.log("Movie already exists");
			}
			return myQueue;
		};
		
		// remove from queue
		MovieQueueService.prototype.removeFromQueue = function(item) {
			var index = myQueue.indexOf(item);
  			myQueue.splice(index, 1);
			  
			return myQueue;
		}
		// returning the movie service
		return MovieQueueService; 
	}]);
})(angular);