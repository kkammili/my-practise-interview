// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

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

   // Finding highest value in array
   const high = Object.values(chars).reduce((prev, curr, ind, arr)=>{
     return prev > curr ? prev : curr
   })
   // Finding index of highest item
   const index = Object.values(chars).indexOf(high)
   // Returning associated key
   return Object.keys(chars)[index]
}

module.exports = maxChar;
