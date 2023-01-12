/* Given a string, return the char that has the maximum frequency.
If muliple chars occur the max number of times,
return the character that occurs first in the  string.

Example:

maxChar('good morning') -> 'o'
maxChar('abbcc') -> 'b'
*/

function maxChar1(str){
    //empty object to store characters and occurences
    const countObj = {};

    //loop through chars of the string
    for (let char of str) {
        //if there is no key with char, instantiate to 0
        if (countObj[char] === undefined) countObj[char] = 0;
        //increment the count
        countObj[char]++;
    }


    //find the max occuring char
    let maxCharCandidate;
    let maxFreq = 0;

    for (let [char, freq] of Object.entries(countObj)){
        if (maxCharCandidate === undefined || freq > maxFreq){
            maxCharCandidate = char;
            maxFreq = freq;
        } 
    }

    return maxCharCandidate;
}

//DID NOT FINISH MAXCHAR2
function maxChar2 (str){
    //start an empty map
    const charMap = new Map();

    for (let char of str) {
        if (!charMap.has(char)) charMap.set(char,0);
        charMap
    }
}