(function(){
	angular.module("prereqsmap")
	.controller("HomeController",["$scope", "$state", function($scope, $state){
		$scope.findMajor = function(){
			alert("HI");
		}
	}]);
}());