class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// const node1 = new Node(10);

class LinkedLists {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head; //newNode
        this.length = 1;
    }

    /* const linkedList = new LinkedLists(2);
        Paso 1. linkedList = {};
        Paso 2. linkedList = {
            head: nodoHead,
            tail: nodoTail,
            length: 1,
        };
    */
    printList() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        // consol.log del nodo que es cabeza en este momento 
        // const headTemp = this.head;
        // console.log(headTemp, 'Es la cabeza en este momento');
        // console.log(this.head, 'Es la cabeza en este momento con el valor de ', this.head.value);
        console.log(this.head, ` es la cabeza de esta lista ligada con el valor de ${this.head.value}`);
    }

    getTail() {
        // consol.log del nodo que es cola en este momento 
        console.log(this.tail, 'Es la cola en este momento');
    }

    getLength() {
        console.log(`La longitud de esta lista ligada es ${this.length}`);
    }

    push(value) {
        const newNode = new Node(value);
        /* 
        -- Lista no vacia
        this.tail.next = newNode;
        this.tail = newNode;
        -- Lista está vacia
        this.head = newNode;
        this.tail = newNode; 
        */
        if (this.length > 0) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
        this.length++;

        // ⬇️ Equivalencias
        // this.length = this.length + 1;
        // this.length += 1;

        return this.length;
    }

    pop() {
        if (this.length === 0) { return undefined; }
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
            // console.log('pre:', pre);
            // console.log('temp:', temp);
        }
        console.log('pre:', pre)
        console.log('temp:', temp)
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift() {
        // adds a node beginning of a linked list and returns the new length of the linked list.
    }
    shift() {

    }
}

const linkedList1 = new LinkedLists(6);
// linkedList1.printList();
// linkedList1.getHead();
// linkedList1.getTail();
// linkedList1.getLength();

linkedList1.push(4);
linkedList1.push(5);
linkedList1.push(10);
linkedList1.printList();
const popMethod = linkedList1.pop();
linkedList1.getHead();
linkedList1.getTail();
linkedList1.getLength();
console.log(popMethod);