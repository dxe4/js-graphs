"use strict";

# Usage: zip(arr1, arr2, arr3, ...)
# Origin: http://coffeescriptcookbook.com/chapters/arrays/zip-function
zip = () ->
  lengthArray = (arr.length for arr in arguments)
  length = Math.min(lengthArray...)
  for i in [0...length]
    arr[i] for arr in arguments

to_dict = (keys, values) ->
  _dict = {}
  _dict[key] = value for [key, value] in zip(keys, values)
  _dict

to_dict_pairs = (pairs) ->
  _dict = {}
  _dict[key] = value for [key, value] in pairs
  _dict

console.log to_dict(["foo", "bar"], ["spam", "eggs"])

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
 
node_data = data.map (node) -> to_dict_pairs(zip(["id", "name"], node))

nodes = node_data.map (dict) -> new graphs.Node dict
