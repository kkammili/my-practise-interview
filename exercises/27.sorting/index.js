// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

/*
pseudo code for bubble sort
function bubbleSort(A)
    n := length(A)
    for i := 0 to n-2 inclusive do
        for j := 0 to n-i-2 inclusive do
            if A[j] > A[j+1] then
                swap(A[j], A[j+1])
            end if
        end for
    end for
end function
*/

function bubbleSort(arr) {
 for(let i = 0; i< arr.length; i++){
    for(let j = 0; j< (arr.length -i -1); j++){
        if(arr[j] > arr[j+1]){
            const lesser = arr[j+1]
            arr[j + 1] = arr[j]
            arr[j] = lesser
        }
    }
 }
 return arr
}

/*
pseudo code for selection sort
function selectionSort(A)
    n := length(A)
    for i := 0 to n-2 inclusive do
        // Find the minimum element in the unsorted part
        minIndex := i
        for j := i+1 to n-1 inclusive do
            if A[j] < A[minIndex] then
                minIndex := j
            end if
        end for

        // Swap the found minimum element with the first element
        swap(A[i], A[minIndex])
    end for
end function
*/

function selectionSort(arr) {
    for(let i=0;i<arr.length-1;i++){
        let minIndex = i

        // assume i is least and run below loop for prove me wrong
        for(let j = i+1; j< arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            const lesser = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = lesser
        }
    }
    return arr
}

/* Only consider an arr of two elements then it becomes easy to get to solution

Ex: [0, 97]

*/

function mergeSort(arr) {
    if(arr.length ===1){
        return arr
    }

    const center = Math.floor(arr.length/2)
    /* here center is arr length/2 because slice will omit last value */
    const left = arr.slice(0, center)
    const right = arr.slice(center)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const results = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            results.push(left.shift())
        }else{
            results.push(right.shift())
        }
    }
    // add left over elements as left and right
    return [...results,...left,...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
