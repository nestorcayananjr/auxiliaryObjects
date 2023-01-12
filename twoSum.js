/* GIVEN AN ARRAY OF INTEGERS AND A TARGET INTEGER RETURN
true if a pair of integers exist in the array that add up to the target.


Example:

twoSum([2,4,5], 9) -> true
twoSum([5, -1, -2, 3], 1) -> true
twoSum([2,4,5], 8) -> false
*/

funcion twoSum1(arr, target){
    for (let i = 0; i < arr.length; i++){
        // for every integer of the array
        for (let j = i + 1; j < arr.length; j++){
            // go through every integer after it and check the sum
            if (arr[i] + arr[j] === target) return true;
        }
    }

    return false;
}

//Naive approach  = O(n)^2

function twoSum2 (arr,target){
    // set to store difference of target and element
    const diffs = new Set();

    // iterate through array
    for (let element of arr){
        //current element exists in diffs, we saw its complement before
        if (diffs.has(element)) return true;
        //otherwise add the complement to the diffs
        else diffs.add(target - element);
    }

    return false;
}

