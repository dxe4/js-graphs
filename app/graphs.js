// Generated by CoffeeScript 1.7.1
"use strict";

/*
 	COMMON MODULE
 */
var Graph, Node, common, data, graphs, node_data, nodes, num;

common = {};

common.zip = function() {
  var arr, i, length, lengthArray, _i, _results;
  lengthArray = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = arguments.length; _i < _len; _i++) {
      arr = arguments[_i];
      _results.push(arr.length);
    }
    return _results;
  }).apply(this, arguments);
  length = Math.min.apply(Math, lengthArray);
  _results = [];
  for (i = _i = 0; 0 <= length ? _i < length : _i > length; i = 0 <= length ? ++_i : --_i) {
    _results.push((function() {
      var _j, _len, _results1;
      _results1 = [];
      for (_j = 0, _len = arguments.length; _j < _len; _j++) {
        arr = arguments[_j];
        _results1.push(arr[i]);
      }
      return _results1;
    }).apply(this, arguments));
  }
  return _results;
};

common.to_dict = function(keys, values) {
  var key, value, _dict, _i, _len, _ref, _ref1;
  _dict = {};
  _ref = zip(keys, values);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    _ref1 = _ref[_i], key = _ref1[0], value = _ref1[1];
    _dict[key] = value;
  }
  return _dict;
};

common.to_dict_pairs = function(pairs) {
  var key, value, _dict, _i, _len, _ref;
  _dict = {};
  for (_i = 0, _len = pairs.length; _i < _len; _i++) {
    _ref = pairs[_i], key = _ref[0], value = _ref[1];
    _dict[key] = value;
  }
  return _dict;
};


/*
 	GRAPHS MODULE
 */

graphs = {};

graphs.Graph = Graph = (function() {
  function Graph(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
  }

  return Graph;

})();

graphs.Node = Node = (function() {
  function Node(data) {
    this.data = data;
  }

  return Node;

})();

graphs.Edge = Node = (function() {
  function Node(data) {
    this.data = data;
  }

  return Node;

})();

data = common.zip((function() {
  var _i, _results;
  _results = [];
  for (num = _i = 1; _i <= 10; num = ++_i) {
    _results.push(num);
  }
  return _results;
})(), (function() {
  var _i, _results;
  _results = [];
  for (num = _i = 1; _i <= 10; num = ++_i) {
    _results.push("foo_" + num);
  }
  return _results;
})());

node_data = data.map(function(node) {
  return common.to_dict_pairs(common.zip(["id", "name"], node));
});

nodes = node_data.map(function(dict) {
  return new graphs.Node(dict);
});