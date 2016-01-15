(function(){
	angular.module("prereqsmap")
	.controller("MajorController",["$scope","$state",function($scope,$state){
		$scope.addMajor = function (major, classes) {
			if (classes == undefined || major == undefined) {
				alert("Fill out form completely");
			} else {
				$scope.major = major;
				$scope.listOfClasses = classes.split(",");
				$('#classes').modal('show');
			}
		}
	}]);
}());