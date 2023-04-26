function threeNumberSum(array, targetSum) {
    // Write your code here.
  
    let triplets = [];
    let sorted = array.sort((a,b) => a-b);
    
    for (var i = 0; i < array.length - 2; i++){
        var right = array.length -1;
        var left = i + 1; 
  
        while (left < right){
          if (sorted[right]+ sorted[i] + sorted[left] === targetSum){
            triplets.push([sorted[i], sorted[left], sorted[right]]);
            left++;
            right--;
          } else if (sorted[right] + sorted[i] + sorted[left] < targetSum){
            left++;
          } else if (sorted[right] + sorted[i] + sorted[left] > targetSum){
            right--;
          }
        }
    }
  
    return triplets;
  }
  
  // Do not edit the line below.
  exports.threeNumberSum = threeNumberSum;