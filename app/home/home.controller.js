(function(){
	angular.module("prereqsmap")
	.controller("HomeController",["$scope", "$state", "$http", "$cookies", "DataFactory", function($scope, $state, $http, $cookies, DataFactory){
		$scope.selectSchool = function(school) {
			$http.get("/api/school/" + school).success(function(data){
				$scope.majors = data[0].majors;
			});
		}
		// $scope.selectMajor = function(school,major){
		// 	DataFactory.query = {
		// 		school: school,
		// 		major: major
		// 	}
		// 	$cookies.putObject("query",DataFactory.query);
		// 	$state.go("graph");
		// }
		$scope.selectMajor = function (major) {
			var re = new RegExp(major.toLowerCase() + ".+");
			$scope.searchMajor = [];
			$scope.majors.forEach(function(ma){
				var result = ma.toLowerCase().match(re);
				if (result) {
					$scope.searchMajor.push(ma);
				}
			})
		}
	}]);
}());