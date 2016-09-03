//Wordlist for initiate game

var StartGame = function(){
  this.pokeMon = ["bulbasaur", "ivysaur", "squirtle", "wartortle", "pidegey", "pidgeotto", "psyduck", "golduck", "abra", "kadabra","pikachu", "raichu"];
  this.answer = this.pokeMon[Math.floor(Math.random() * this.pokeMon.length)];

}

module.exports = StartGame;
