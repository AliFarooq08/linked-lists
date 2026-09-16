class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.nodes = {}
        this.nodeCount = 0;
    }
    static Node = class {
        constructor(value, nextNode = null) {
            this.value = value;
            this.nextNode = nextNode;
        }
    };
    append(value) {
        if (this.nodeCount === 0) {
            this.nodes = new LinkedList.Node(value)
            this.head = this.nodes
            this.nodeCount++
        } else {
            let currentNode = this.nodes
            for (let i = 0; i < this.nodeCount - 1; i++) {
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode = new LinkedList.Node(value)
            this.tail = currentNode.nextNode
            this.nodeCount++
        }
        return this.nodes
    }
    prepend(value) {
        if (this.nodeCount === 0) {
            this.nodes = new LinkedList.Node(value)
            this.head = this.nodes
            this.nodeCount++
        } else {
            this.nodes = new LinkedList.Node(value, this.head)
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
        return this.tail.value
    }
    at(index) {
        let currentNode = this.nodes
        for (let i = 0; i < index; i++) {
            if (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode 
            } else {
                return undefined
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
            this.head = this.nodes
            this.nodeCount -= 1
            return this.nodes
        }
        
    }
    contains(value) {
        let currentNode = this.nodes
        let found = false
        for (let i = 0; i < this.nodeCount; i++) {
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
        for (let i = 0; i < this.nodeCount; i++) {
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

        return tempString
    }
    insertAt(index, ...values) {
        if (index > this.nodeCount || index < 0) {
            throw new RangeError("Outside the confines of this universe.")
        }
        let currentNode = this.nodes
        let prevCopy = {}
        let iteration = 0
        let countIncrease = 0
        for (let i = 0; i < this.nodeCount + 1; i++) {
            if (i === index) {
                for (let j = values.length - 1; j >= 0; j--) {
                    currentNode = new LinkedList.Node(values[j], currentNode)
                    this.nodeCount++
                    countIncrease++
                }
                if (i === 0) {
                    this.head = currentNode
                } else if (i === this.nodeCount - countIncrease) {
                    this.tail = currentNode
                }
                for (iteration; iteration > 0; iteration--){
                    currentNode = new LinkedList.Node(prevCopy.value, currentNode)
                    prevCopy = prevCopy.nextNode
                } 
                this.nodes = currentNode
                break
            } else {
                iteration++
                if (iteration === 1) {
                    prevCopy = new LinkedList.Node(currentNode.value)
                } else {
                    prevCopy = new LinkedList.Node(currentNode.value, prevCopy)
                }
                currentNode = currentNode.nextNode
            }
        }
    }
    removeAt(index) {
        if (index > this.nodeCount || index < 0) {
            throw new RangeError("Outside the confines of this universe.")
        }
        let currentNode = this.nodes
        let prevCopy = {}
        let iteration = 0
        for (let i = 0; i < this.nodeCount + 1; i++) {
            if (i === index) {
                const prevValue = prevCopy
                currentNode = currentNode.nextNode
                this.nodeCount--
                for (iteration; iteration > 0; iteration--){
                    currentNode = new LinkedList.Node(prevCopy.value, currentNode)
                    prevCopy = prevCopy.nextNode
                }
                if (i === 0) {
                    this.head = currentNode
                } else if (i === this.nodeCount) {
                    this.tail = prevValue
                }
                this.nodes = currentNode
                break
            } else {
                iteration++
                if (iteration === 1) {
                    prevCopy = new LinkedList.Node(currentNode.value)
                } else {
                    prevCopy = new LinkedList.Node(currentNode.value, prevCopy)
                }
                currentNode = currentNode.nextNode
            }
        }
    }
}

const  list = new LinkedList()
list.append("My Cat Coco")
list.append("Me")
list.append("I")
list.prepend("test")
list.prepend("I am Steve")
console.log(list.toString())    

console.log("")
console.log(`List size: ${list.size()}`)
console.log(`Current head: ${list.getHead()}`)
console.log(`Current tail: ${list.getTail()}`)

console.log("")
console.log(`List item at index 0: ${list.at(0)}`)
console.log(`List item at index 4: ${list.at(4)}`)
console.log(`List item at index 5: ${list.at(5)}`)
console.log(`List item at index 10: ${list.at(10)}`)

console.log("")
list.pop()
console.log(list.toString())
console.log(`Current head: ${list.getHead()}`)
console.log(`List contains I?: ${list.contains("I")}`)
console.log(`List contains Me?: ${list.contains("Me")}`)
console.log(`Get index of I: ${list.findIndex("I")}`)
console.log(`Get index of Hello: ${list.findIndex   ("Hello")}`)
console.log("")

console.log(`Inserting "Hello" and "World" at index 0:`)
list.insertAt(0, "Hello", "World")
console.log(list.toString())
console.log("")

console.log(`Inserting "Why? at index 1:`)
list.insertAt(1, "Why?")
console.log(list.toString())
console.log("")

console.log(`Inserting "Goodbye" and "World" at index 6:`)
list.insertAt(6, "Goodbye", "World")
console.log(list.toString())
console.log("")

console.log(`Inserting "E" at index 9:`)
list.insertAt(9, "E")
console.log(list.toString())
console.log("")

console.log(`Removing "E" at index 9:`)
list.removeAt(9)
console.log(list.toString())
console.log("")

console.log(`Removing "Hello" at index 0:`)
list.removeAt(0)
console.log(list.toString())
console.log("")

console.log(`Removing "My Cat Coco" at index 3:`)
list.removeAt(3)
console.log(list.toString())
console.log("")
console.log(`Current Head: ${list.getHead()}`)
console.log(`Current Tail: ${list.getTail()}`)
console.log(`List size: ${list.size()}`)
console.log(`Final Print: ${list.toString()}`)
