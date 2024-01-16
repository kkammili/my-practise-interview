// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// my solution
// function steps(n) {
//     let row = 1;
//     while(row<=n){
//         let arr = Array.from({length:n},(x,column)=>{
//             // index is array index
//             // i is loop index
//             if(row<=column){
//                 return " "
//             }
//             return "#"
//         })
//         console.log(arr.join(''))
//         row++;
//     }
// }

function steps(n){
    for(let row = 0;row < n; row++){
        let stair = ''
        for(let column = 0; column <n; column ++){
            if(column<=row){
                stair = stair + "#"
            }else{
                stair = stair + " "
            }
        }
        console.log(stair)
    }
}

//recursive solution

// function steps(n, row = 0, stair = ''){
//     if(n === row){
//         return
//     }
//     if(n === stair.length){
//         console.log(stair.length)
//         return steps(n, row + 1)
//     }
//     if(stair.length <= row){
//         stair += "#";
//     }else{
//         stair += " "
//     }
//     const add = stair.length <=row ? "#":' ';
//     steps(n, row, stair+ add)
// }

module.exports = steps;
