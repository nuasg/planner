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
				.state("graph", {
					url: "/graph", 
					templateUrl: "app/graph/graph.html",
					controller: "GraphController"
				})
				// .state("profile", {
				// 	url: "/profile",
				// 	views: {
				// 		"": {
				// 			url: "/profile",
				// 			templateUrl: "app/profile/profile.html",
				// 			controller: "ProfileController"
				// 		},
				// 		"sidebar@profile": {
				// 			templateUrl: "app/profile/sidebar.html",
				// 			controller: "SidebarController"
				// 		},
				// 		"graph@profile": {
				// 			templateUrl: "app/profile/graph.html",
				// 			controller: "GraphController"
				// 		}
				// 	}
					
				// })
		})
}());