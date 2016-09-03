// Initiate Game with inquirer

var inquirer = require('inquirer')

var Game = require('./game.js');

var newGame = new Game();


console.log(newGame.answer);
