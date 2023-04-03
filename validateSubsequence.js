function isValidSubsequence(array, sequence) {
    let sequenceIdx = 0;
    for (var i = 0; i < array.length; i++){
      if (array[i] == sequence[sequenceIdx]){
        sequenceIdx++;
      }
    }
  
    return sequenceIdx == sequence.length; 
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  