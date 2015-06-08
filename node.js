var Connection = require('./connection')

var Node = function(title, text) {
  this.title = title
  this.text = text
  this.connections = []
}

Node.prototype.render = function () {}

Node.prototype.route = function(input) {
  for(var i = 0; i < this.connections.length; i++) {
    if(this.connections[i].test(input)) {
      return this.connections[i].nextNode
    }
  }
}

Node.prototype.connect = function(nextNode, condition) {
  if(this.hasConnectionCondition(condition)) 
    throw new Error('multiple connections regestered with the same condition')
  return this.connections.push(new Connection(nextNode, condition))
}

Node.prototype.hasConnectionCondition = function(condition) {
  return this.getConnectionStrings().indexOf(condition) !== -1
}

Node.prototype.getConnectionStrings = function() {
  return this.connections.map(function(con) {
    return con.condition
  })
}

module.exports = Node