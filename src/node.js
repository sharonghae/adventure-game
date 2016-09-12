var Connection = require('./connection')

var Node = function(title, text) {
 this.title = title;
 this.text = text;
 this.connections = [];
 this.conditions = {};
}



Node.prototype.connect = function(nodeName, condition) {
	var newConnection = new Connection(nodeName, condition);
	for(var key in this.conditions) {
		if(condition === key) {
			throw new Error("Error");
		} 
			
	}
	this.connections.push(newConnection);
	this.conditions[condition] = newConnection;
		
	
}
module.exports = Node
