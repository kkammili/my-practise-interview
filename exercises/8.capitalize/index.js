// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// my simplte solution
// function capitalize(str) {
//     return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
// }

function capitalize(str){
    let result = str[0].toUpperCase()

    for(let i=1; i< str.length; i++){
        if(str[i-1] === ' '){
            result = result + str[i].toUpperCase()
        }else{
            result = result + str[i]
        }
    }

    return result
}

// function capitalizeWords(str) {
//     return str.replace(/\b\w/g, function(match) {
//       return match.toUpperCase();
//     });
// }

module.exports = capitalize;
