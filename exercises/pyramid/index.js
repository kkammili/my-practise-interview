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
// function pyramid(n) {
//     for(let row = 1; row<=n;row++){
//         let nhash = 2 * row-1
//         let spaces = (2 * n - 1 - nhash)/2
//         let arr = []
//         let space = Array.from({length:spaces}, ()=>" ")
//         let hashes = Array.from({length:nhash}, ()=>"#")
//         arr = arr.concat(space)
//         arr = arr.concat(hashes)
//         arr = arr.concat(space)
//         console.log(arr.join(""))
//         arr = []
//     }
// }

// function pyramid(n){
//     const midPoint = (2 * n - 1)/2;
//     for(let row =0; row <n; row++){
//         let level = ''
//         for(let column =0; column< 2*n-1; column++){
//             if(midPoint - row <= column && midPoint + row >= column){
//                 level += "#"
//             }else{
//                 level += " "
//             }
//         }

//     }
// }

function pyramid(n, row=0, level= ''){
    if(row === n){
        return;
    }

    if(level.length === 2*n-1){
        console.log(level);
        return pyramid(n, row + 1)
    }

    const midPoint = Math.floor((2*n-1)/2)
    let add;
    if(midPoint-row <= level.length && midPoint + row >= level.length){
        add = "#"
    }else{
        add = " "
    }

    pyramid(n, row, level+add)
}

module.exports = pyramid;
