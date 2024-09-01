// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort


// Define the bubbleSort function that takes an array as its parameter
/*
Association with Bubbles: The analogy of bubbles rising in water can help you visualize how elements move in the array during sorting.
Implement and Experiment: Writing your own Bubble Sort and tweaking it (e.g., optimizing, tracing) helps reinforce understanding. Try implementing both the optimized and the naive version.
Real-life Scenario: Think of sorting a row of books based on their height where you only compare and swap adjacent books until the entire row is sorted. This can make the concept more tangible.
*/

// visualize it https://www.geeksforgeeks.org/bubble-sort/
function bubbleSort(arr) {
    // Outer loop goes through the entire array
    for(let i = 0; i < arr.length; i++){
        // Inner loop for comparing adjacent elements
        // The -i optimization skips the already sorted largest elements at the end of the array
        for(let j = 0; j < (arr.length - i - 1); j++){
            // If the current element is greater than the next element, swap them
            if(arr[j] > arr[j+1]){
                // Temporary storage for the element to be swapped
                const lesser = arr[j+1];
                // Swapping process
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    // Return the sorted array
    return arr;
}

/*
Visualize as a Contest: Imagine each element in the array as a contestant in a "least number" competition. The for loop is the contest where each element gets a chance to prove it's the smallest by comparing itself to all others.

The Assumption Game: Initially, assume the first contestant (element) is the smallest. As you check each of the other contestants, update your assumption if you find a smaller one.

The Swap Dance: If the initial contestant isn't the smallest, they swap places with the smallest contestant found. This ensures the smallest contestant is always placed at the beginning of the unsorted portion of the array.

Narrowing the Stage: With each iteration of the outer loop, the portion of the array being searched shrinks, as the smallest elements are progressively placed at the start of the array.

Efficiency Reminder: Remember, Selection Sort doesn't need to make as many swaps as Bubble Sort, but it still checks each element, making its efficiency O(n^2) for comparisons.

*/

function selectionSort(arr) {
    // Loop over the entire array, except for the last element
    for(let i = 0; i < arr.length - 1; i++){
        // Start by assuming the current position holds the smallest value
        let minIndex = i;

        // Search the rest of the array to find the smallest value
        for(let j = i + 1; j < arr.length; j++){
            // If we find a value smaller than the current minimum, update minIndex
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        /* 
        // Use reduce to find the index of the smallest value in the rest of the array
        let minIndex = arr.slice(i).reduce((minIdx, currentVal, currentIndex) => {
            return currentVal < arr[minIdx + i] ? currentIndex + i : minIdx;
        }, i);
        
        */

        // If the current position doesn't hold the minimum value, swap it with the minimum value found
        if(minIndex !== i){
            const lesser = arr[minIndex]; // Temporarily store the smaller value
            arr[minIndex] = arr[i]; // Move the current value to the minimum's position
            arr[i] = lesser; // Place the minimum value in the current position
        }
    }

    // Return the sorted array
    return arr;
}


/* Only consider an arr of two elements then it becomes easy to get to solution

Ex: [0, 97]

*/

// Define the mergeSort function that takes an array as its parameter
function mergeSort(arr) {
    // Base case: If the array has only one element, it's already sorted, so return it
    if(arr.length === 1){
        return arr;
    }

    // Find the middle index of the array to divide it into two halves
    // Math.floor is used to handle odd lengths by rounding down
    const center = Math.floor(arr.length / 2);
    
    // Split the array into a left portion, from the start up to (but not including) the center
    const left = arr.slice(0, center);
    // Split the array into a right portion, from the center to the end
    const right = arr.slice(center);

    // Recursively apply mergeSort to both halves of the array to sort each half,
    // and then merge the sorted halves back together
    return merge(mergeSort(left), mergeSort(right));
}


// Define the merge function with two sorted arrays as parameters
function merge(left, right) {
    // Initialize an empty array to store the merged result
    const results = [];

    // Continue looping as long as both input arrays have elements
    while(left.length && right.length){
        // Compare the first element of each array
        if(left[0] < right[0]){
            // If the first element of the left array is smaller, 
            // remove it from the left array and add it to the results array
            results.push(left.shift());
        }else{
            // If the first element of the right array is smaller or equal,
            // remove it from the right array and add it to the results array
            results.push(right.shift());
        }
    }

    // After one of the arrays is empty, concatenate the remaining elements 
    // of both arrays to the results array. Since the arrays are already sorted, 
    // the remaining elements in either `left` or `right` will be in order 
    // and should follow the elements already placed in `results`.
    // `left` or `right` might be empty at this point, but spreading an empty array 
    // will have no effect, ensuring that only the non-empty remainder is appended.
    return [...results, ...left, ...right];
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }

    let pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    let left = [];
    let right = [];

    // Partition the array into two halves
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements less than the pivot go to the left array
        } else {
            right.push(arr[i]); // Elements greater than or equal to the pivot go to the right array
        }
    }

    // Recursively sort the left and right arrays, then concatenate with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example Usage:
let arr = [3, 6, 8, 10, 1, 2, 1];
let sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [1, 1, 2, 3, 6, 8, 10]

/* using js provided method
    arr.sort((a,b) => a-b)
    sorts the arr in asc order
*/


module.exports = { bubbleSort, selectionSort, mergeSort, merge };
