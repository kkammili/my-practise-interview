// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//my solution
function pyramid(n) {
    for(let row = 1; row<=n;row++){
        let nhash = 2 * row-1
        let spaces = (2 * n - 1 - nhash)/2
        let arr = []
        let space = Array.from({length:spaces}, ()=>" ")
        let hashes = Array.from({length:nhash}, ()=>"#")
        arr = arr.concat(space)
        arr = arr.concat(hashes)
        arr = arr.concat(space)
        console.log(arr.join(""))
        arr = []
    }
}

module.exports = pyramid;
