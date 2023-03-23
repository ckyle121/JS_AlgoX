function twoSum(array, targetSum){
    const set = new Set();

    for (var num of array){
        const subtract = targetSum - num; 

        if (set.has(subtract)){
            return [num, subtract];
        }

        set.add(num);
    }

    return [];
}