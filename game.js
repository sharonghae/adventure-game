var Game = function() {
  this.nodes = {}
}

Game.prototype.hasNode = function(title) {
  return !!this.getNode(title)
}

Game.prototype.addNode = function(title, text) {
  if(this.hasNode(title)) throw new Error('a node with the title' + title + 'already exists')
  this.nodes[title] = new Node(title, text)
}

Game.prototype.getNode = function(title) {
  return this.nodes[title]
}

Game.prototype.connect = function(node1, node2, condition) {
  node1 = this.getNode(node1)
  node2 = this.getNode(node2)
  if(!node1 || !node2) throw new Error('cannot find one or more of your nodes to connect')

  node1.connect(node2, condition)
}

module.exports = Game