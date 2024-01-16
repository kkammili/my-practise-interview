// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data
        })
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF(fn) {
        // root => {data:'a', children:[{data:'b', children:[{data:'d', children:[]}]}, {data:'c', children:[]}]}
        let arr = [this.root]
        while (arr.length) {
            const node = arr.shift()

            // we can also use es6 version arr.push(...node.children)
            for (let child of node.children) {
                arr.push(child)
            }

            fn(node)
        }

    }

    traverseDF(fn) {
        let arr2 = [this.root]
        while (arr2.length) {
            const node = arr2.shift()
            // ES6 version only working ?
            arr2.unshift(...node.children)
            // for (let child of node.children) {
            //     arr2.unshift(child)
            // }

            fn(node)
        }
    }
}

module.exports = { Tree, Node };
