"use strict";

graphs = {}
graphs.Graph = class Graph
	constructor: (@nodes, @edges) ->
		
graphs.Node = class Node
	constructor: (@data) ->
		
graphs.Edge = class Node
	constructor: (@data) ->

node = new graphs.Node({foo: "bar", id: 1})
node1 = new graphs.Node({foo: "bar2", id: 2})


graph = new graphs.Graph([node])

console.log(graph.nodes)

cool_dict = {}
cool_dict[node] = 1
cool_dict[node1] = 2


console.log(cool_dict[node])
console.log(cool_dict[node1])
