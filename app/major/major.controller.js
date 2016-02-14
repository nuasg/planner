(function(){
	angular.module("prereqsmap")
	.controller("MajorController",["$scope","$state","$http",function($scope,$state,$http){
		$http.get("/api/school").success(function(data){
			$scope.schools = data;
		});
		getMajors();
		$scope.addMajor = function (major, classes) {
			if (classes == undefined || major == undefined) {
				alert("Fill out form completely");
			} else {
				$scope.major = major;
				$scope.listOfClasses = classes.split(",");
				$('#classes').modal('show');
			}
		}
		$scope.createMajor = function (major,classes) {
			var data = {
				name: major, 
				classes: classes
			};
			$http.post("api/major", data).success(function(data){
				$('#classes').modal('hide');
				if (data.response) {
					alert("Created");
					getMajors();
				}
			}).error(function(error){
				alert("There was an error");
			});
		}
		$scope.deleteConfirmation = function(school, major){
			$scope.selectedMajor = major;
			$scope.selectedSchool = school;
			$('#delete').modal('show');
		}
		$scope.deleteMajor = function (school, major) {
			var index = school.majors.indexOf(major);
			if (index >= 0) {
				school.majors.splice( index, 1 );
			}
			$scope.school = school;
			$('#delete').modal('hide');
		}
		function getMajors () {
			$http.get("/api/major").success(function(data){
				$scope.majors = data;
			});
		}
	}]);
}());