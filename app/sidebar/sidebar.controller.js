(function(){
	angular.module("prereqsmap")
	.controller("SidebarController",["$scope", "$state", "$http", "$cookies", "DataFactory", function($scope, $state, $http, $cookies, DataFactory){		
		$scope.query = DataFactory.query.school ? DataFactory.query : $cookies.getObject("query");
		if (!$scope.query) {
			$state.go("home");
		}
	}]);
}());