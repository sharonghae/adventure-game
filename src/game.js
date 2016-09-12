var Node = require('./node')

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
}

Game.prototype.addNode = function(nodeName, nodeText) {
	if(this.nodes[nodeNames])
		throw new Error("Error");
	// //for(var key in this.nodes){
	// 	if(key === nodeName){
	// 		throw new Error("Error");
	// 	}
	// }
	var newNode = new Node(nodeName, nodeText);
	this.nodes[nodeName] = newNode;
	if(this.startingPoint === null){ //or !this.startingPoint (testing for falsey value)
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
	if(this.nodes[node1] === undefined || this.nodes[node2] === undefined){ //can also use getNode
		throw new Error("Error");
	}
	this.nodes[node1].connect(this.nodes[node2], condition); //can also use getNode
}

module.exports = Game
