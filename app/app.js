(function(){
	angular.module("prereqsmap",["ui.router","ngCookies"])
		.config(function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state("home", {
					url: "/",
					templateUrl: "app/home/home.html",
					controller: "HomeController"
				})
				.state("signUp", {
					url: "/signup",
					templateUrl: "app/signup/signup.html",
					controller: "SignUpController"
				})
				.state("major", {
					url: "/major",
					templateUrl: "app/major/major.html",
					controller: "MajorController"
				})
				.state("classpage", {
					url: "/classpage",
					views: {
						"": {
							url: "/classpage",
							templateUrl: "app/classpage/classpage.html",
							controller: "ClassPageController"
						},
						"sidebar@classpage": {
							templateUrl: "app/sidebar/sidebar.html",
							controller: "SidebarController"
						},
						"graph@classpage": {
							templateUrl: "app/graph/graph.html",
							controller: "GraphController"
						}
					}
					
				})
		})
}());