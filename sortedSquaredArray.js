function sortedSquaredArray(array) {
    var sorted = [];

    var leftIdx = 0;
    var rightIdx = array.length - 1; 

    var sortedArrayIdx = array.length - 1; 

    while (sortedArrayIdx < 0){
        if (Math.abs(array[left]) > Math.abs(array[right])){
            sorted[sortedArrayIdx] = array[leftIdx] * array[leftIdx];
            leftIdx++;
            sortedArrayIdx--;
        } else {
            sorted[sortedArrayIdx] = array[rightIdx] * array[rightIdx];
            rightIdx--;
            sortedArrayIdx--;
        }
    }


    return sorted;
  }