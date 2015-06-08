var Connection = function(nextNode, condition) {
  this.condition = condition
  this.nextNode = nextNode
}

Connection.prototype.test = function(input) {
  if(!this.condition) return true
  return input === this.condition
}

module.exports = Connection