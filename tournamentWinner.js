function tournamentWinner(competitions, results) {
  // Write your code here.
  var winner = "";
  var topScore = 0;

  var map = {};
  
  for (var i = 0; i < competitions.length; i++){
      if (results[i] == 0){
        if (!(competitions[i][1] in map)){
          map[competitions[i][1]] = 3;
        }
        map[competitions[i][1]] += 3;
      } 
      else {
        if (!(competitions[i][0] in map)){
          map[competitions[i][0]] = 3;
        }
        map[competitions[i][0]] += 3;
      }
    
  }

  for (var entry in map){
    if (map[entry] >topScore){
      topScore = map[entry];
      winner = entry; 
    }
  }

  
  return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;