"use strict";
(function(angular){
	var questionnaire  = angular.module("questionnaire");
	
	questionnaire.service("QuestionnaireService", ["$http", "$q", function($http, $q){
		
		// internal structures not exposed to the ouside world
		// TODO: change structure and corresponding components to use the following data structure:
		// questions: [{question:'...', answer: 0},{question: '...'. answer: 0}...]
		var questions = [
			"Little interest or pleasure in doing things",
			"Feeling down, depressed, or hopeless",
			"Trouble falling or staying asleep, or sleeping too much",
			"Feeling tired or having little energy",
			"Poor appetite or overeating",
			"Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
			"Moving or speaking so slowly that other people could have noticed",
			"Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
			"Thoughts that you would be better off dead, or of hurting yourself in some way"
		];
		var	answers = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		var score = 0;
		
		// constructor function
		var QuestionnaireService = function() {
		};
		
		// retrieve question
		QuestionnaireService.prototype.getQuestion = function(index) {
			return questions[index];
		};
		
		// retrieve questions count
		// this will be used to kick off calculations
		QuestionnaireService.prototype.totalQuestions = function() {
			return questions.length;
		};
		
		// save answer
		QuestionnaireService.prototype.saveAnswer = function(index, answer) {
			answers[index] = answer;
		};
		
		// calculate score
		QuestionnaireService.prototype.calculateScore = function() {
			score = answers.reduce(function(previousValue, currentValue, index, array) {
					return previousValue + currentValue;
				});
				console.log(score)
		}

		// return score
		QuestionnaireService.prototype.getScore = function() {
			return score;
		};
		
		// return service object
		return QuestionnaireService; 
	}]);
})(angular);
