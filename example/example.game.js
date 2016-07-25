// this file defines an actual game that will be played

var Game = require('../src/game')

var game = new Game()

// adding nodes

game.addNode('direction', 'Welcome. Do you choose to go left, or right?')

game.addNode('leftResp', 'Ah, good choice. Good choice. Now what color is the best?')
game.addNode('rightResp', 'There be dragons there.')

game.addNode('yep', 'that is true')
game.addNode('wrong', 'you would be incorrect, friend')

// connecting nodes

game.connect('direction', 'leftResp', 'left')
game.connect('direction', 'rightResp', 'right')

game.connect('leftResp', 'yep', 'blue')
game.connect('leftResp', 'wrong', 'green')
game.connect('leftResp', 'wrong', 'red')

module.exports = game
