"use strict";
(function(angular){
	var questionnaire = angular.module("questionnaire", ["ui.router"]);
	
	questionnaire.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/questionnaire");
		$stateProvider
			.state("questionnaire", { 
				url: "/questionnaire", 
				templateUrl: "components/questionnaire/questionnaire.html",
				controller: "questionnaireCtrl"
			}) 
			.state("questionnaireResults", { 
				url: "/questionnaireResults",
				templateUrl: "components/questionnaireResults/questionnaireResults.html",
				controller: "questionnaireResultsCtrl"
			})
		}
	);
})(angular);

