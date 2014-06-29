"use strict";


# TODO need to figure out how to setup requirejs

###
 	COMMON MODULE
###
common = {}
# Usage: zip(arr1, arr2, arr3, ...)
# Origin: http://coffeescriptcookbook.com/chapters/arrays/zip-function
common.zip = () ->
	lengthArray = (arr.length for arr in arguments)
	length = Math.min(lengthArray...)
	for i in [0...length]
	  arr[i] for arr in arguments

common.to_dict = (keys, values) ->
	_dict = {}
	_dict[key] = value for [key, value] in zip(keys, values)
	_dict

common.to_dict_pairs = (pairs) ->
	_dict = {}
	_dict[key] = value for [key, value] in pairs
	_dict

###
 	GRAPHS MODULE
###
graphs = {}
graphs.Graph = class Graph
	constructor: (@nodes, @edges) ->

graphs.Node = class Node
	constructor: (@data) ->

graphs.Edge = class Node
	constructor: (@data) ->

data = common.zip(
	(num for num in [1..10]),
	("foo_#{num}" for num in [1..10]) )

node_data = data.map (node) ->
	common.to_dict_pairs(common.zip(["id", "name"], node) )

nodes = node_data.map (dict) -> new graphs.Node dict
