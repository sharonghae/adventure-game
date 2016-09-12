var Node = require('./node')

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
}

Game.prototype.addNode = function(nodeName, nodeText) {
	for(var key in this.nodes){
		if(key === nodeName){
			throw new Error("Error");
		}
	}
	var newNode = new Node(nodeName, nodeText);
	this.nodes[nodeName] = newNode;
	if(this.startingPoint === null){
		this.startingPoint = newNode;
	}
	return newNode;
}

Game.prototype.getNode = function(nodeName){
	if(this.nodes.hasOwnProperty(nodeName)){
		return this.nodes[nodeName];
	}
}

Game.prototype.connect = function(node1, node2, condition){
	if(this.nodes[node1] === undefined || this.nodes[node2] === undefined){
		throw new Error("Error");
	}
	this.nodes[node1].connect(this.nodes[node2], condition);
}

module.exports = Game
