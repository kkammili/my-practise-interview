// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {

    if (!list.head || n <= 0) {
        return null;
    }

    let fast = list.head
    let slow = list.head

    // Move 'fast' n nodes ahead
    for (let i = 0; i < n + 1; i++) {
        if (fast === null) {
            // If the list has fewer than n nodes
            return null;
        }
        fast = fast.next;
    }


    while (fast !== null) {
        slow = slow.next
        fast = fast.next

    }
    return slow
}

module.exports = fromLast;
