// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     var rev = ''
//     for(let i=str.length-1;i>=0; i--){
//         rev += str[i]
//     }
//     return rev
// }


function reverse(str){
    return str.split('').reverse().join('');
}


// Tip: never use classic for loop instead use of or in iterate
function reverse1(str){
    const reversed = ''
    for(let character of str){
        reversed = character + reversed
    }
}

function reverse2(str){
    return str.split('').reduce((reversed, character)=>{
        return reversed + character;
    }, '')
}
module.exports = reverse;
