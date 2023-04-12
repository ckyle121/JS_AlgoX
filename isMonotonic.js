function isMonotonic(array) {
    // Write your code here.
    if (array.length <= 1){
      return true;
    }
  
    let isDecreasing = array[0] > array[array.length -1];
  
    for (let i = 1; i < array.length; i++){
      if (isDecreasing && array[i] > array[i-1]){
        return false;
      } else if (!isDecreasing && array[i] < array[i-1]){
        return false; 
      }
    }
  
    return true; 
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;