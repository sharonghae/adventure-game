var expect = require('chai').expect
var Connection = require('../connection')
var Node = require('../node')

describe('Connection', function() {
  var aNode

  before(function() {
    aNode = new Node()
  })

  it('adopts value and name from constructor parameters', function() {
    var someConnection = new Connection(aNode, 'foo')
    expect(someConnection.value).to.equal(aNode)
    expect(someConnection.name).to.equal('foo')
  })

  it('has name, value, and short (which is just name)', function() {
    var someConnection = new Connection(aNode, 'foo')
    expect(someConnection.value).to.equal(aNode)
    expect(someConnection.name).to.equal('foo')
    expect(someConnection.short).to.equal('foo')
  })
})
