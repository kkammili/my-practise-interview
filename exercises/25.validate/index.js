// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // Base case: if the node is null, it's a valid BST
  if (node === null) {
    return true;
  }

  // Check if the node value is within the specified range
  if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
    return false;
  }

  // Recursively check the left and right subtrees with updated ranges
  return (
    validate(node.left, min, node.data) &&
    validate(node.right, node.data, max)
  );
}

// my solution
// function validate(node, min = null, max = null) {
//     if (max !== null && node.data > max) {
//         return false
//     }

//     if (min !== null && node.data < min) {
//         return false
//     }

//     if (node.left && !validate(node.left, min, node.data)) {
//         return false
//     }

//     if (node.right && !validate(node.right, node.data, max)) {
//         return false
//     }

//     return true;
// }


module.exports = validate;

