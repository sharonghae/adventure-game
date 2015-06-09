// this file defines an actual game that will be played

var Game = require('./game')

var g = new Game()

g.addNode(‘name’, ’Hello adventurer, what is your name’)

g.addNode(‘direction’, ‘Welcome %name%. Do you choose to go left, or right?’)

g.addNode(‘leftResp’, ‘Ah, good choice %name%. Good choice’)

g.addNode(‘rightResp’, ‘There be dragons there.’)

g.connect(‘name’, ‘direction’) // with no third argument, it always connects!
g.connect(‘direction’, ‘leftResp’, ‘left’)
g.connect(‘direction’, ‘rightResp’, ‘right’)

module.exports = g