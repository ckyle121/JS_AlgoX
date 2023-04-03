function sortedSquaredArray(array) {
    // Write your code here.
    let newarray = [];
    
    for (var num in array){
      newarray.push(array[num]*array[num]);
    }
  
    newarray.sort((a,b) => a-b);
    
    return newarray;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
  