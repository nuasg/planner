(function(){
	angular.module("prereqsmap")
	.controller("MajorController",["$scope","$state","$http",function($scope,$state,$http){
		$scope.addMajor = function (major, classes) {
			if (classes == undefined || major == undefined) {
				alert("Fill out form completely");
			} else {
				$scope.major = major;
				$scope.listOfClasses = classes.split(",");
				$('#classes').modal('show');
				var data = {
					name: $scope.major, 
					classes: $scope.listOfClasses
				};
				$http.post("api/major", data).success(function(response){

				}).error(function(error){
					console.log(error);
				});
			}
		}
	}]);
}());