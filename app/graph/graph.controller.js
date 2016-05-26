(function(){
	angular.module("prereqsmap")
	.controller("GraphController",["$scope", "$state", "$http", "$cookies", "DataFactory", function($scope, $state, $http, $cookies, DataFactory){		
		$scope.init = function () {
			var a = [["EECS 214"],["EECS 213",["EECS 230","EECS 211"]]];
			var elements = create_node_helper(a,[],[],"EECS 340",0,0);
			elements.nodes.push({data:{id:"EECS 340"}});
			// var elements = {
			// 		nodes: [
			// 			{ data: { id: 'n0' } },
			// 			{ data: { id: 'n1' } },
			// 			{ data: { id: 'n2' } },
			// 			{ data: { id: 'n3' } },
			// 			{ data: { id: 'n4' } },
			// 			{ data: { id: 'n5' } },
			// 			{ data: { id: 'n6' } },
			// 			{ data: { id: 'n7' } },
			// 			{ data: { id: 'n8' } },
			// 			{ data: { id: 'n9' } },
			// 			{ data: { id: 'n10' } },
			// 			{ data: { id: 'n11' } },
			// 			{ data: { id: 'n12' } },
			// 			{ data: { id: 'n13' } },
			// 			{ data: { id: 'n14' } },
			// 			{ data: { id: 'n15' } },
			// 			{ data: { id: 'n16' } }
			// 		],
			// 		edges: [
			// 			{ data: { source: 'n0', target: 'n1' } },
			// 			{ data: { source: 'n1', target: 'n2' } },
			// 			{ data: { source: 'n1', target: 'n3' } },
			// 			{ data: { source: 'n4', target: 'n5' } },
			// 			{ data: { source: 'n4', target: 'n6' } },
			// 			{ data: { source: 'n6', target: 'n7' } },
			// 			{ data: { source: 'n6', target: 'n8' } },
			// 			{ data: { source: 'n8', target: 'n9' } },
			// 			{ data: { source: 'n8', target: 'n10' } },
			// 			{ data: { source: 'n11', target: 'n12' } },
			// 			{ data: { source: 'n12', target: 'n13' } },
			// 			{ data: { source: 'n13', target: 'n14' } },
			// 			{ data: { source: 'n13', target: 'n15' } },
			// 		]
			// 	}
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
		var graph_data =
		{
	  "EECS 473-2": {
	    "requirements": null,
	    "title": "NUvention: Web - Part 2"
	  },
	  "EECS 473-1": {
	    "requirements": null,
	    "title": "NUvention: Web - Part 1"
	  },
	  "EECS 512-1": {
	    "requirements": null,
	    "title": "Graduate Research Seminar"
	  },
	  "EECS 512-3": {
	    "requirements": null,
	    "title": "Graduate Research Seminar"
	  },
	  "EECS 512-2": {
	    "requirements": null,
	    "title": "Graduate Research Seminar in EECS"
	  },
	  "EECS 360-0": {
	    "requirements": null,
	    "title": "Introduction to Feedback Systems"
	  },
	  "EECS 354-0": {
	    "requirements": null,
	    "title": "Network Penetration & Security"
	  },
	  "EECS 348-0": {
	    "requirements": [["EECS 111-0"]],
	    "title": "Introduction to Artificial Intelligence"
	  },
	  "EECS 401-0": {
	    "requirements": null,
	    "title": "Fundamentals of Electronic Devices"
	  },
	  "EECS 363-0": {
	    "requirements": null,
	    "title": "Digital Filtering"
	  },
	  "EECS 302-0": {
	    "requirements": null,
	    "title": "Probabilistic Systems and Random Signals"
	  },
	  "EECS 111-0": {
	    "requirements": null,
	    "title": "Fundamentals of Computer Programming"
	  },
	  "EECS 368-0": {
	    "requirements": [["EECS 213-0"],["EECS 211-0","EECS 230-0"]],
	    "title": "Programming Massively Parallel Processors with CUDA"
	  },
	  "EECS 338-0": {
	    "requirements": null,
	    "title": "Practicum in Intelligent Information Systems"
	  },
	  "EECS 384-0": {
	    "requirements": null,
	    "title": "Solid State Electronic Devices"
	  },
	  "EECS 383-0": {
	    "requirements": null,
	    "title": "Fiber-Optic Communications"
	  },
	  "EECS 418-0": {
	    "requirements": null,
	    "title": "Advanced Digital Signal Processing"
	  },
	  "EECS 357-0": {
	    "requirements": null,
	    "title": "Design Automation in VLSI"
	  },
	  "EECS 452-0": {
	    "requirements": null,
	    "title": "Adv Computer Architecture"
	  },
	  "EECS 340-0": {
	    "requirements": [["EECS 214-0"],["EECS 213-0",["EECS 230-0", "EECS 211-0"]]],
	    "title": "Introduction to Networking"
	  },
	  "EECS 347-1": {
	    "requirements": null,
	    "title": "Microprocessor System Projects"
	  },
	  "EECS 347-2": {
	    "requirements": [["EECS 347-1"]],
	    "title": "Microprocessor System Project II"
	  },
	  "EECS 225-0": {
	    "requirements": null,
	    "title": "Fundamentals of Electronics"
	  },
	  "EECS 211-0": {
	    "requirements": [["EECS 111-0"]],
	    "title": "Fundamentals of Computer Programming II"
	  },
	  "EECS 358-0": {
	    "requirements": null,
	    "title": "Introduction to Parallel Computing"
	  },
	  "EECS 101-0": {
	    "requirements": null,
	    "title": "An Introduction to Computer Science for Everyone"
	  },
	  "EECS 459-0": {
	    "requirements": null,
	    "title": "VLSI Algorythmics"
	  },
	  "EECS 379-0": {
	    "requirements": null,
	    "title": "Lasers and Coherent Optics"
	  },
	  "EECS 333-0": {
	    "requirements": null,
	    "title": "Introduction to Communication Networks"
	  },
	  "EECS 330-0": {
	    "requirements": [["EECS 211-0"]],
	    "title": "Human Computer Interaction"
	  },
	  "EECS 431-0": {
	    "requirements": null,
	    "title": "Human Perception and Electronic Media"
	  },
	  "EECS 372-0": {
	    "requirements": null,
	    "title": "Designing & Constructing Models with Multi-Agent Language"
	  },
	  "EECS 362-0": {
	    "requirements": null,
	    "title": "Computer Architecture Projects"
	  },
	  "EECS 427-0": {
	    "requirements": null,
	    "title": "Optical Communications"
	  },
	  "EECS 337-0": {
	    "requirements": null,
	    "title": "Natural Language Processing"
	  },
	  "EECS 221-0": {
	    "requirements": null,
	    "title": "Fundamentals of Circuits"
	  },
	  "EECS 222-0": {
	    "requirements": null,
	    "title": "Fundamentals of Signals & Systems"
	  },
	  "EECS 343-0": {
	    "requirements": [["EECS 213-0"],["EECS 214-0"]],
	    "title": "Operating Systems"
	  },
	  "EECS 398-0": {
	    "requirements": null,
	    "title": "Electrical Engineering Design"
	  },
	  "EECS 403-0": {
	    "requirements": null,
	    "title": "Quantum Semiconductors"
	  },
	  "EECS 409-0": {
	    "requirements": null,
	    "title": "Semiconductor Lasers"
	  },
	  "EECS 404-0": {
	    "requirements": null,
	    "title": "Quantum Electronics"
	  },
	  "EECS 510-0": {
	    "requirements": null,
	    "title": "Seminar"
	  },
	  "EECS 395-0": {
	    "requirements": null,
	    "title": "Special Topics in Electrical Engineering and Computer Science"
	  },
	  "EECS 435-0": {
	    "requirements": null,
	    "title": "Neural Networks"
	  },
	  "EECS 371-0": {
	    "requirements": [["EECS 348-0","EECS 325-0"]],
	    "title": "Knowledge Representation and Reasoning"
	  },
	  "EECS 203-0": {
	    "requirements": null,
	    "title": "Introduction to Computer Engineering"
	  },
	  "EECS 317-0": {
	    "requirements": null,
	    "title": "Data Management & Information Processing"
	  },
	  "EECS 214-0": {
	    "requirements": [["EECS 211-0","EECS 230-0"]],
	    "title": "Data Structures & Data Management"
	  },
	  "EECS 110-0": {
	    "requirements": null,
	    "title": "Introduction to Computer Programming"
	  },
	  "EECS 391-0": {
	    "requirements": null,
	    "title": "VLSI Systems Design"
	  },
	  "EECS 410-0": {
	    "requirements": null,
	    "title": "System Theory"
	  },
	  "EECS 440-0": {
	    "requirements": null,
	    "title": "Advanced Networking"
	  },
	  "EECS 388-0": {
	    "requirements": null,
	    "title": "Nanotechnology"
	  },
	  "EECS 301-0": {
	    "requirements": null,
	    "title": "Introduction to Robotics Laboratory"
	  },
	  "EECS 355-0": {
	    "requirements": null,
	    "title": "ASIC and FPGA Design"
	  },
	  "EECS 303-0": {
	    "requirements": null,
	    "title": "Advanced Digital Design"
	  },
	  "EECS 335-0": {
	    "requirements": [["EECS 212-0"]],
	    "title": "Introduction to the Theory of Computation"
	  },
	  "EECS 361-0": {
	    "requirements": null,
	    "title": "Computer Architecture I"
	  },
	  "EECS 392-0": {
	    "requirements": null,
	    "title": "VLSI Systems Design Projects"
	  },
	  "EECS 406-0": {
	    "requirements": null,
	    "title": "Nonlinear Optics"
	  },
	  "EECS 382-0": {
	    "requirements": null,
	    "title": "Photonic Information Processing"
	  },
	  "EECS 369-0": {
	    "Requirements": [["EECS 343-0","EECS 340-0"]],
	    "title": "Introduction to Sensor Networks"
	  },
	  "EECS 422-0": {
	    "requirements": null,
	    "title": "Random Processes in Communications and Control 1"
	  },
	  "EECS 454-0": {
	    "requirements": null,
	    "title": "Advanced Communication Networks"
	  },
	  "EECS 453-0": {
	    "requirements": null,
	    "title": "Parallel Architectures"
	  },
	  "EECS 223-0": {
	    "requirements": null,
	    "title": "Fundamentals of Solid State Engineering"
	  },
	  "EECS 359-0": {
	    "requirements": null,
	    "title": "Digital Signal Processing"
	  },
	  "EECS 224-0": {
	    "requirements": [["EECS 221-0"]],
	    "title": "Fund of Electromagnetics & Photonics"
	  },
	  "EECS 346-0": {
	    "requirements": [["EECS 203-0"],["EECS 205-0"]],
	    "title": "Microprocessor System Design"
	  },
	  "EECS 322-0": {
	    "requirements": [["EECS 321-0"]],
	    "title": "Compiler  Construction"
	  },
	  "EECS 213-0": {
	    "requirements": null,
	    "title": "Introduction to Computer Systems"
	  },
	  "EECS 381-0": {
	    "requirements": null,
	    "title": "Electronic Materials: Properties and Applications"
	  },
	  "EECS 339-0": {
	    "requirements": null,
	    "title": "Introduction to Database Systems"
	  },
	  "EECS 378-0": {
	    "requirements": null,
	    "title": "Digital Communications"
	  },
	  "EECS 351-0": {
	    "requirements": [["EECS 214-0"]],
	    "title": "Introduction to Computer Graphics"
	  },
	  "EECS 100-0": {
	    "requirements": null,
	    "title": "Electrons, Photons, and Bits:  Adventures in Electrical and Computer Engineering"
	  },
	  "EECS 130-0": {
	    "requirements": null,
	    "title": "Tools and Technology of the World-Wide Web"
	  },
	  "EECS 352-0": {
	    "requirements": null,
	    "title": "Machine Perception of Music & Audio"
	  },
	  "EECS 230-0": {
	    "requirements": null,
	    "title": "Programming for Engineers"
	  },
	  "EECS 345-0": {
	    "requirements": [["EECS 340-0"],["343-0"]],
	    "title": "Distributed Systems"
	  },
	  "EECS 332-0": {
	    "requirements": null,
	    "title": "Introduction to Computer Vision"
	  },
	  "EECS 433-0": {
	    "requirements": null,
	    "title": "Statistical Pattern Recognition"
	  },
	  "EECS 546-0": {
	    "requirements": null,
	    "title": "Teaching Experience II"
	  },
	  "EECS 349-0": {
	    "requirements": [["EECS 214-0"],["EECS 325-1"]],
	    "title": "Machine Learning"
	  },
	  "EECS 307-0": {
	    "requirements": null,
	    "title": "Communications Systems"
	  },
	  "EECS 336-0": {
	    "requirements": null,
	    "title": "Design & Analysis of Algorithms"
	  },
	  "EECS 426-0": {
	    "requirements": null,
	    "title": "Signal Detection and Estimation"
	  },
	  "EECS 420-0": {
	    "requirements": null,
	    "title": "Digital Image Processing"
	  },
	  "EECS 405-0": {
	    "requirements": null,
	    "title": "Advanced Photonics"
	  },
	  "EECS 205-0": {
	    "requirements": null,
	    "title": "Fundamentals of Computer System Software"
	  },
	  "EECS 202-0": {
	    "requirements": null,
	    "title": "Introduction to Electrical Engineering"
	  },
	  "EECS 394-0": {
	    "requirements": null,
	    "title": "Software Project Management & Development"
	  },
	  "EECS 212-0": {
	    "requirements": [["EECS 111-0","EECS 110-0"],["MATH 230-0"]],
	    "title": "Mathematical Foundations of Comp Science"
	  },
	  "EECS 468-0": {
	    "requirements": null,
	    "title": "Programming Massively Parallel Processors with CUDA"
	  },
	  "EECS 321-0": {
	    "requirements": [["EECS 211-0"],["EECS 214-0"]],
	    "title": "Programming Languages"
	  },
	  "EECS 325-1": {
	    "requirements": null,
	    "title": "Artificial Intelligence Programming"
	  },
	  "EECS 390-0": {
	    "requirements": null,
	    "title": "Introduction to Robotics"
	  },
	  "EECS 374-0": {
	    "requirements": null,
	    "title": "Introduction to Digital Control"
	  },
	  "EECS 545-0": {
	    "requirements": null,
	    "title": "Teaching Experience I"
	  }}
		function create_nodes (graph_data) {
			var nodes = [];
			var edges = [];
			var num_ors = 0;
			var array = Object.keys(graph_data);
			for (var i=0; i<array.length; i++) {
				var cname = array[i];
				// Does node already exist in list of nodes
				if (nodes.indexOf(cname) == -1){
					nodes.push({ data: { id: cname } });
				}
				// 
				var values = graph_data[cname].requirements;
				if (values) {

				}
			}
		}
		
		function create_node_helper(array,nodes,edges,parent,numOrs,temp) {
			// Base Case
			for (var i = 0; i< array.length; i++){
				if (Array.isArray(array[i]) && array[i].length == 1 && typeof(array[i][0]) == "string") {
					nodes = add_to_node(nodes,array[i][0]);
					edges = add_edge(edges,array[i][0],parent);
				} else {
					if (typeof(array[i]) == "string") {
						nodes = add_to_node(nodes,array[i]);
						edges = add_edge(edges,array[i],parent);
					} else {
						var string = "or" + numOrs;
						nodes = add_to_node(nodes,string);
						edges = add_edge(edges,string,parent);
						var returned = create_node_helper(array[i],nodes,edges,string,numOrs + 1,temp);
						nodes = nodes.concat(returned.nodes.filter(function(item){return nodes.indexOf(item) < 0}));
						edges = edges.concat(returned.edges.filter(function(item){return edges.indexOf(item) < 0}));
						temp = Math.max(returned.temp,returned.numOrs,temp);
					}
				}
			}
			return {"nodes":nodes,"edges":edges,"numOrs":numOrs,"temp":temp};
		}

		function add_to_node (nodes,cname) {
			var temp = { data: { id: cname } };
			if (nodes.indexOf(temp) < 0){
				nodes.push(temp);
			}
			return nodes;
		}

		function add_edge (edges,source,target) {
			var temp = { data: { source: source, target: target } };
			if (edges.indexOf(temp) < 0){
				edges.push(temp);
			}
			return edges;
		}
		a = [["EECS 214"],["EECS 213",["EECS 230","EECS 211"]]];
		create_node_helper(a,[],[],"EECS 340",0,0)
		console.log("Meep");
	}]);
}());

