"use strict";
(function(angular){
	var questionnaire = angular.module("questionnaire");

	questionnaire.controller("questionnaireCtrl", function($scope, $location, QuestionnaireService){
		var questionnaireService = new QuestionnaireService();
		var index = 0;
		var totalQuestions = 0;
		$scope.question = questionnaireService.getQuestion(index);
		totalQuestions = questionnaireService.totalQuestions();

		$scope.saveAndNext = function() {
			questionnaireService.saveAnswer(index, $scope.answer);
			index = index + 1;
			if ( totalQuestions > index) {
				$scope.question = questionnaireService.getQuestion(index);
				$scope.answer = null;	// reset				
			}
			else {
				questionnaireService.calculateScore();
				$location.path("/questionnaireResults")
			}
		}
	})
})(angular);