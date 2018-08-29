function sortScores(unorderedScores, highestPossibleScore) {
  var scoreCounts = [];
  for (var i = 0; i < highestPossibleScore +1; i++){
    scoreCounts.push(0);
  }
  
  unorderedScores.forEach((score) => {
    scoreCounuts[score]++;
  })
  
  var sortedScores = [];
  
  
  //iterating from 100 to 0 
  for (var score = highestPossibleScore; score >= 0; score--){
    //get the number of times that score appeared
    var count = scoreCounts[score];
    
    //add each time it appeared into the array
    for (var time = 0; time < count; time++){
      sortedScores.push(score);
    }
    
  }
  return sortedScores;
  
}
