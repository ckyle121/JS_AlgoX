function arrayOfProducts(array) {
    // Write your code here.
    var result = [];
  
    let leftProduct = 1;
    for (let i = 0; i < array.length; i++){
      result[i] = leftProduct;
      leftProduct *= array[i];
    }
  
    let rightProduct = 1;
    for (i = array.length -1; i >= 0; i--){
     result[i] *= rightProduct;
      rightProduct *= array[i];
    }
    
    return result;
  }
  
  // Do not edit the line below.
  exports.arrayOfProducts = arrayOfProducts;