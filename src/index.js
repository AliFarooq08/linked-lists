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
            this.nodes = this.nodes.nextNode
            this.head = this.nodes
            this.nodeCount -= 1
            return this.nodes
        } 
    }
    contains(value) {
        let currentNode = this.nodes
        for (let i = 0; i < this.nodeCount; i++) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }
    findIndex(value) {
        let currentNode = this.nodes
        for (let index = 0; index < this.nodeCount; index++) {
            if (currentNode.value === value) {
                return index
            }
            currentNode = currentNode.nextNode
        }
        return -1
    }
    toString() {
        let tempString = ``
        let currentNode = this.nodes
        while (currentNode !== null) {
            tempString += `(${currentNode.value}) -> `
            currentNode = currentNode.nextNode
        }
        return tempString += "(null)"
    }
    insertAt(index, ...values) {
        if (index > this.nodeCount || index < 0) {
            throw new RangeError("Outside linked list range.")
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
export { LinkedList }