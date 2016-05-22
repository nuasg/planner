(function(){
	angular.module("prereqsmap")
	.controller("GraphController",["$scope", "$state", "$http", "$cookies", "DataFactory", function($scope, $state, $http, $cookies, DataFactory){		
		$scope.init = function () {
			var elements = {
					nodes: [
						{ data: { id: 'n0' } },
						{ data: { id: 'n1' } },
						{ data: { id: 'n2' } },
						{ data: { id: 'n3' } },
						{ data: { id: 'n4' } },
						{ data: { id: 'n5' } },
						{ data: { id: 'n6' } },
						{ data: { id: 'n7' } },
						{ data: { id: 'n8' } },
						{ data: { id: 'n9' } },
						{ data: { id: 'n10' } },
						{ data: { id: 'n11' } },
						{ data: { id: 'n12' } },
						{ data: { id: 'n13' } },
						{ data: { id: 'n14' } },
						{ data: { id: 'n15' } },
						{ data: { id: 'n16' } }
					],
					edges: [
						{ data: { source: 'n0', target: 'n1' } },
						{ data: { source: 'n1', target: 'n2' } },
						{ data: { source: 'n1', target: 'n3' } },
						{ data: { source: 'n4', target: 'n5' } },
						{ data: { source: 'n4', target: 'n6' } },
						{ data: { source: 'n6', target: 'n7' } },
						{ data: { source: 'n6', target: 'n8' } },
						{ data: { source: 'n8', target: 'n9' } },
						{ data: { source: 'n8', target: 'n10' } },
						{ data: { source: 'n11', target: 'n12' } },
						{ data: { source: 'n12', target: 'n13' } },
						{ data: { source: 'n13', target: 'n14' } },
						{ data: { source: 'n13', target: 'n15' } },
					]
				}
			var cy = window.cy = cytoscape({
				container: document.getElementById('cy'),
				// initial position
				pan: { x: 75, y: 50 },
				// settings
		        boxSelectionEnabled: false,
		        panningEnabled: false,
		        autounselectify: true,
		        zoomingEnabled: false,
		        userZoomingEnabled: false,
				layout: {
					name: 'dagre'
				},
				style: [
					{
						selector: 'node',
						style: {
							'content': 'data(id)',
							'text-opacity': 0.5,
							'text-valign': 'center',
							'text-halign': 'right',
							'background-color': '#11479e'
						}
					},
					{
						selector: 'edge',
						style: {
							'width': 4,
							'target-arrow-shape': 'triangle',
							'line-color': '#9dbaea',
							'target-arrow-color': '#9dbaea'
						}
					}
				],
				elements: elements,
			});
			
		}
		$scope.query = DataFactory.query.school ? DataFactory.query : $cookies.getObject("query");
		if (!$scope.query) {
			$state.go("home");
		}
		// function create_nodes (graph_data) {
		// 	nodes = [];
		// 	edges = [];
		// 	array = keys(graph_data);
		// 	for (var i=0; i<array.length; i++) {
		// 		values = array[i].requirements;
		// 		if (values) {
		// 			values
		// 		}
		// 	}
		// }
	}]);
}());

