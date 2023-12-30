// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
     let fast = list.head
    let slow = list.head
    let circular = false

    while(fast && fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
        if(slow=== fast){
            circular = true
            break;
        }
    }
    return circular
}

module.exports = circular;
