// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
Mnemonic: "A Cat In Snow"
Parameters of the reduce Function
accumulator (acc)
currentValue (cur)
currentIndex (idx) [Optional]
sourceArray (arr) [Optional]
*/

function maxChar(str) {
    // creating hash map
   const chars = {}
   for(let char of str){
    if(!chars[char]){
        chars[char] = 1
    }else{
        chars[char] = chars[char] + 1
    }
   }

   // Finding largest number in array
   //[1,2,3,4]
   const high = Object.values(chars).reduce((acc, curr, ind, arr)=>{
     return acc > curr ? acc : curr
   })
   // Finding index of largest number
   const index = Object.values(chars).indexOf(high)
   // Returning key associated with the largest number
   return Object.keys(chars)[index]
}

module.exports = maxChar;
