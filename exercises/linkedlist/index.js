// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


//Note: Focus on InsertAt, RemoveAt, GetAt methods since they can cover all remaining methods

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    insertFirst(data){
        if(!this.head){
            this.head = new Node(data)
        }else{
            this.head = new Node(data, this.head)
        }
    }

    size(){
        let count = 0
        let curr = this.head
        while(curr){
            count += 1;
            curr = curr.next
        }
        return count
    }

    getFirst(){
        return this.head
    }

    getLast(){
        let curr = this.head
        let tail = null
        while(curr){
            tail = curr
            curr = curr.next
        }
        return tail
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        this.head = this.head && this.head.next
    }

    removeLast(){
        if(!this.head){
            return
        }

        if(!this.head.next){
            this.head = null
        }

        let prev = this.head;
        let node = prev && this.head.next;
        while(node && node.next){
            prev = node
            node = node.next
        }

        if(prev){
            prev.next = null

        }
    }

    insertLast(data){
        const last = this.getLast()
        if(last){
            last.next = new Node(data)
        }else{
            this.head = new Node(data)
        }
    }

    getAt(ind){
        if(!ind){
            return this.head
        }

        if(ind > this.size()){
            return null
        }
        let itInd = 0
        let node = this.head
        while(itInd < ind){
            itInd += 1
            node = node && node.next
        }
        return node
    }

    removeAt(ind){
        if(!ind && this.head && this.head.next){
            this.head = this.head.next
        }
        let itInd = 1
        let prev = this.head
        let curr = prev && this.head.next
        while(itInd < ind){
            prev = curr
            curr = curr && curr.next
            itInd += 1
        }
        if(prev){
            prev.next = curr && curr.next
        }
    }

    insertAt(data, ind){
        if(!ind){
            this.head = new Node(data, this.head)
            return
        }
        let itInd = 1
        let prev = this.head
        let curr = prev && this.head.next
        while(itInd < ind){
            prev = curr
            curr = curr && curr.next
            itInd += 1
        }

        if(prev){
          prev.next = new Node(data, curr)
        }else{
            this.insertLast(data)
        }
    }

    forEach(func){
        // func(data, index)
        let curr = this.head
        while(curr){
           func(curr)
            curr = curr.next
        }
    }


}

module.exports = { Node, LinkedList };
