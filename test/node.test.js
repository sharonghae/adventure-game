var expect = require('chai').expect;
var Node = require('../node');

describe('Node', function() {

  // first let's just set up some basic assertions 
  // about how the "Node" class works

  it('adopts title and text from constructor parameters', function() {
    var myNode = new Node('some title', 'some text')
    expect(myNode.title).to.equal('some title')
    expect(myNode.text).to.equal('some text')
  })

  it('starts with an empty connections array', function() {
    expect(new Node().connections).to.eql([])
  })

  // now, let's describe how we can wire up nodes 
  // and then test if we switch from one node to 
  // another with a certain input

  describe('connections', function() {
    //first let's make two nodes
    var node1, node2
    before(function() {
      node1 = new Node()
      node2 = new Node()
      node1.connect(node2, 'under some circumstance')
    })

    it('adds a connection to the node\'s connection array with #connect', function() {
      expect(node1.connections).to.have.length(1)
    })

    it('does not allow multiple connections with the same condition', function() {
      node1.connect(node2, 'a')
      expect(function() {
        node1.connect(new Node(), 'a')
        // in this instance .connect should throw an instance of an Error object
        // read more about the Error constructor here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
      }).to.throw(Error)

    })

  })
})
