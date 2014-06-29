"use strict";

# Usage: zip(arr1, arr2, arr3, ...)
# Origin: http://coffeescriptcookbook.com/chapters/arrays/zip-function
zip = () ->
  lengthArray = (arr.length for arr in arguments)
  length = Math.min(lengthArray...)
  for i in [0...length]
    arr[i] for arr in arguments


to_dict = (keys, values) ->
# Pass keys and values to create a dict
# Example: to_dict(["name", "price"], [["spam", "1.50"], ["eggs", "1.49"])
# Returns: [{"name":"spam", "price":"1.50"}, {"name": "eggs", "price": "1.49"}]
	values.map (value) ->
	 	val = {}
	 	zip(value, keys).map (k) ->
	 		k.reduce (a, b) ->
	 			val[b] = a
	 			val
	 	val

graphs = {}
graphs.Graph = class Graph
	constructor: (@nodes, @edges) ->

graphs.Node = class Node
	constructor: (@data) ->

graphs.Edge = class Node
	constructor: (@data) ->

data = zip(
	(num for num in [1..10]),
	("foo_#{num}" for num in [1..10]) )

node_data = to_dict(["id", "name"], data)

nodes = node_data.map (dict) -> new graphs.Node dict

graph = new graphs.Graph([node])
