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

    let fast = list.getFirst();
    let slow = list.getFirst();

    // // Move 'fast' n nodes ahead
    // for (let i = 0; i < n + 1; i++) {
    //     if (fast === null) {
    //         // If the list has fewer than n nodes
    //         return null;
    //     }
    //     fast = fast.next;
    // }

    while (n > 0) {
        fast = fast.next;
        n--;
    }

    // making mistake here it's fast.next not fast
    while (fast.next) {
        slow = slow.next
        fast = fast.next

    }
    return slow
}

module.exports = fromLast;
