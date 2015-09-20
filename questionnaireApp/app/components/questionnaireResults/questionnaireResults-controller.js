"use strict";
(function(angular){
	var questionnaire = angular.module("questionnaire");

	questionnaire.controller("questionnaireResultsCtrl", function($scope, $location, QuestionnaireService){
		var questionnaireService = new QuestionnaireService();
		$scope.score = questionnaireService.getScore();
		$scope.therapists = [];
		$scope.showList = false;
		$scope.therapistSelected = 0;
		
		var init = function() {
			if ( $scope.score >= 10 ) {
				$scope.showList = true;
				// API call will be made to get list of therapists
				// using mock data now
				$scope.therapists = [
					{
						name: "John Doe",
						qualifications: "PhD",
					},
					{
						name: "Jane Doe",
						qualifications: "PhD",
					},					
					{
						name: "John Smith",
						qualifications: "PhD",
					}
				]
			}
		};
		init();
		$scope.saveAndNext = function() {
			$scope.showList = false;
		}
	})
})(angular);