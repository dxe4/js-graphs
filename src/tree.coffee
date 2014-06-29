# http://alisdair.mcdiarmid.org/2013/03/05/tree-traversal-in-coffeescript.html

t3 = [2, [1], [3]]

preorder_traversal = (f, z, tree) ->
  do go = (tree, z) ->
    return z unless tree?
    [v, l, r] = tree
    z1 = f(v, z)
    z2 = go(l, z1)
    z3 = go(r, z2)

inorder_traversal = (f, z, tree) ->
  do go = (tree, z) ->
    return z unless tree?
    [v, l, r] = tree
    z1 = go(l, z)
    z2 = f(v, z1)
    z3 = go(r, z2)

flatten = (traversal, tree) ->
  append = (i, a) -> a.concat(i)
  traversal append, [], tree

console.log flatten inorder_traversal, t3
console.log flatten preorder_traversal, t3
