class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.nodes = {}
        this.nodeCount = 0;
    }
    append(value) {
        if (this.nodeCount === 0) {
            this.nodes = new Node(value)
            this.head = this.nodes
            this.nodeCount++
        } else {
            let currentNode = this.nodes
            for (let i = 0; i < this.nodeCount - 1; i++) {
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode = new Node(value)
            this.tail = currentNode
            this.nodeCount++
        }
        return this.nodes
    }
    prepend(value) {
        if (this.nodeCount === 0) {
            this.nodes = new Node(value)
            this.head = this.nodes
            this.nodeCount++
        } else {
            console.log(`Dev: ${this.tail.value}`)
            this.nodes = new Node(value, this.head)
            let currentNode = this.nodes
            currentNode.nextNode = this.head
            this.head = currentNode
            this.nodeCount++
        }
        return this.nodes
    }
    size() {
        return this.nodeCount
    }
    getHead() {
        return this.head.value
    }
    getTail() {
        return this.head.value
    }
    at(index) {
        let currentNode = this.nodes
        for (let i = 0; i < index; i++) {
            if (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode 
            } else {
                console.error(`Index must be between 0 and ${this.nodeCount - 1}, but entered ${index}.`)
            }
        }
        return currentNode.value
        
    }
    pop() {
        if (this.nodeCount === 0) {
            return undefined
        } else {
            let removedNode = this.nodes.value
            this.nodes = this.nodes.nextNode
            return this.nodes
        }
        
    }
    contains(value) {
        let currentNode = this.nodes
        let found = false
        for (let i = 0; i < this.nodeCount - 1; i++) {
            if (currentNode.value === value && found == false) {
                found = true
            } else if (found == false) {
                currentNode = currentNode.nextNode
            }
        }
        return found
    }
    findIndex(value) {
        let currentNode = this.nodes
        let found = false
        let index = -1
        for (let i = 0; i < this.nodeCount - 1; i++) {
            if (currentNode.value === value & found == false) {
                index = i 
                found = true
            } else if (found == false) {
                currentNode = currentNode.nextNode
            }
        }
        return index
    }
    toString() {
        let tempString = ``
        let currentNode = this.nodes
        while (currentNode !== null) {
            tempString += `(${currentNode.value}) -> `
            currentNode = currentNode.nextNode
        }
        tempString += "(null)"

        console.log(tempString)
    }
    insertAt(index, ...values) {
        
    }
    removeAt(index) {

    }

}
class Node {
    constructor(value, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}
const list = new LinkedList()
list.append("My Cat Coco")
list.append("Me")
list.append("I")
list.prepend("test")
list.prepend("I am Steve")
console.log(list.toString())    
console.log("")
console.log(`List Size: ${list.size()}`)
console.log(`Current Head: ${list.getHead()}`)
console.log(`Current tail: ${list.getTail()}`)
console.log("")
console.log(`List item at index 0: ${list.at(0)}`)
console.log(`List item at index 4: ${list.at(4)}`)
console.log(`List item at index 5: ${list.at(5)}`)
list.pop()
console.log(list.toString())
console.log(`List contains I?: ${list.contains("I")}`)
console.log(`List contains Me?: ${list.contains("Me")}`)
console.log(`Get index of I: ${list.findIndex("I")}`)
console.log(`Get index of Hello: ${list.findIndex   ("Hello")}`)
