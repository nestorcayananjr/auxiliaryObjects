/*

Given an array, return a new array with the duplicate elements removed.

Example:
removeDuplicates([3,1,3,2,9,1]) -> , [1,2,9]

*/


function removeDup1(arr){

    const output = [];

    //loop through inpur arr
    for(let element of arr){
        //if output array does not already include the array element
        if (!output.includes(element)) {
            //push into output
            output.push(element);
        }
    }

    return output;
}

    // Note: .include method involves an iteration of the array with O(n) time
    // The above approach essentially has a loop nested within a loop, making it O(n^2)

    function removeDup2(arr){
        //initialize an empty set to store seen elements
        const seen = new Set();

        //initialize an output array to contain unique elements
        const output = [];

        //loop through input array
        for (let element of arr) {
            if (!seen.has(element)) {
                seen.add(element);
                output.push(element);
            }
        }
        return output;
    }

    // But we seem to be adding to the set and the output array twice. 
    // Can we save space?

    function removeDup3 (arr){
        //initialize an empty set to store seen elements
        const seen = new Set();

        //iterate through input array
        for (let element of arr){
            //a set will only keep unique elements, even if we add it multiple times
            seen.add(element);
        }

        //spread out the set into a new array
        return [...seen];
    }

    function removeDup4(arr){
        return [...new Set(arr)];
    }

    //time complexity and space complexity for removeDup2,3,4 are all the same.