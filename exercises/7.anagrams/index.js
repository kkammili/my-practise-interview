// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//my simple solution
// function anagrams(stringA, stringB) {
//     stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//     stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//     stringA = stringA.split('').sort().toString()
//     stringB = stringB.split('').sort().toString()

//     return stringA === stringB
// }

function anagrams(stringA, stringB){

    const acharMap = buildCharMap(stringA)
    const bcharMap = buildCharMap(stringB)


    if(Object.keys(acharMap).length !== Object.keys(bcharMap).length){
        return false
    }

    for(let char in acharMap){
        if(acharMap[char] !== bcharMap[char]){
            return false
        }
    }

    return true

}

function buildCharMap(str){
    str = str.replace(/[^\w]/g, '').toLowerCase();
    const map = {}

    for(let char of str){
        if(!map[char]){
            map[char] = 1
        }else{
            map[char] = map[char] + 1
        }
    }
    return map
}



// sort sorts alphabets and string
// sorting array number sort(a,b) => a-b

module.exports = anagrams;
