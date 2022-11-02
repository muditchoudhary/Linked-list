const LinkedList = () => {
	let head = null;
	let tail = null;
	let previousNode = null;
	let listSize = 0;

	const Node = (value = null, nextNode = null) => {
		let myValue = value;
		let myNextNode = nextNode;

		return { value: myValue, nextNode: myNextNode };
	};

	function append(value) {
		let myNode = null;
		if (listSize === 0) {
			myNode = Node(value);
			head = myNode;
		} else {
			myNode = Node(value);
			previousNode.nextNode = myNode;
		}
		tail = myNode;
		previousNode = myNode;
		listSize++;
	}

	function prepend(value) {
		let myNode = null;
		if (listSize === 0) {
			myNode = Node(value);
			tail = myNode;
			previousNode = myNode;
		} else {
			myNode = Node(value, head);
		}
		head = myNode;
		listSize++;
	}

	function size() {
		return listSize;
	}

	function showHead() {
		return head;
	}

	function showTail() {
		return tail;
	}

	function at(index) {
		// Edge case: Index must be in the size of the list
		if (index < 0 || index >= listSize) {
			return "Index out of Bound";
		}
		let counter = index;
		let thatNode = head;
		while (counter > 0) {
			thatNode = thatNode.nextNode;
			counter--;
		}

		return thatNode.value;
	}

	function pop() {
		if (head === null || listSize === 0) {
			return "Create a list first!";
		}
		let indexOfSecondLastNode = listSize - 2;
		let counter = 0;
		let thatNode = head;
		while (counter < indexOfSecondLastNode) {
			thatNode = thatNode.nextNode;
			counter++;
		}
		thatNode.nextNode = null;
		tail = thatNode;
		listSize--;
	}

	function contains(value) {
		if (head === null) {
			return false;
		} else {
			let counter = 0;
			let thatNode = head;
			while (counter < listSize) {
				if (thatNode.value === value) {
					return true;
				}
				thatNode = thatNode.nextNode;
				counter++;
			}
			return false;
		}
	}

	function find(value) {
		if (head === null) {
			return false;
		} else {
			let counter = 0;
			let thatNode = head;
			while (counter < listSize) {
				if (thatNode.value === value) {
					return counter;
				}
				thatNode = thatNode.nextNode;
				counter++;
			}
			return null;
		}
	}

	function toString() {
		if (head === null) {
			console.log("null");
		} else {
			let temp = head;
			do {
				// console.log(temp.value + " -> ");
				process.stdout.write(temp.value + " -> ");
				temp = temp.nextNode;
			} while (temp !== null);

			process.stdout.write("null " + "\n\n");
		}
	}

	function insertAt(value, index) {
		if (index < 0 || index >= listSize) {
			console.log("Index out of bound!" + "\n\n");
			return;
		}

		if (index === 0) {
			prepend(value);
		} else if (index === listSize - 1) {
			append(value);
		} else {
			let indexOfNodeBeforeTarget = index - 1;
			let counter = 0;
			let thatNode = head;
			// Finding that node which is before the target index
			while (counter < indexOfNodeBeforeTarget) {
				thatNode = thatNode.nextNode;
				counter++;
			}
			// Node that is after the target index
			let nodeAfterTarget = thatNode.nextNode;
			// Creating new node
			let myNode = Node(value, nodeAfterTarget);
			// Updating the nextNode pointer of previous node
			thatNode.nextNode = myNode;
			listSize++;
		}
	}

	function removeAt(index) {
		if (index < 0 || index >= listSize) {
			console.log("Index out of bound!" + "\n\n");
			return;
		}

		if (index === 0) {
			let nextNode = head.nextNode;
			head = nextNode;
		} else if (index === listSize - 1) {
			let indexOfNodeBeforeTarget = index - 1;
			let counter = 0;
			let thatNode = head;
			// Finding that node which is before the target index
			while (counter < indexOfNodeBeforeTarget) {
				thatNode = thatNode.nextNode;
				counter++;
			}
			thatNode.nextNode = null;
			tail = thatNode;
		} else {
			let indexOfNodeBeforeTarget = index - 1;
			let counter = 0;
			let thatNode = head;
			// Finding that node which is before the target index
			while (counter < indexOfNodeBeforeTarget) {
				thatNode = thatNode.nextNode;
				counter++;
			}
			// Node that is after the target index
			let nodeAfterTarget = thatNode.nextNode;
			nodeAfterTarget = nodeAfterTarget.nextNode;
			// Updating the nextNode pointer of previous node
			thatNode.nextNode = nodeAfterTarget;
		}

		listSize--;
	}

	return {
		append,
		prepend,
		size,
		showHead,
		showTail,
		at,
		pop,
		contains,
		find,
		toString,
		insertAt,
		removeAt,
	};
};

const myLinkedList = LinkedList();

// Adding initial values with append
// myLinkedList.append(5);
// myLinkedList.append(6);
// myLinkedList.append(7);
// myLinkedList.append(10);
// myLinkedList.append(12);

// Trying prepend method
// myLinkedList.prepend(4);

// Trying append and prepend both together
// myLinkedList.append(15);
// myLinkedList.prepend(2);

// Printing the list
// myLinkedList.toString();

// Printing head and tail
// console.log(myLinkedList.showHead());
// console.log(myLinkedList.showTail());

// Printing the size of the list
// console.log(myLinkedList.size());

// Trying the at method
// console.log(myLinkedList.at(2));
// console.log(myLinkedList.at(6));
// console.log(myLinkedList.at(8));
// console.log(myLinkedList.at(-5));

// Trying contains method
// console.log(myLinkedList.contains(5));
// console.log(myLinkedList.contains(50));
// console.log(myLinkedList.contains(15));

// Trying find method
// console.log(myLinkedList.find(5));
// console.log(myLinkedList.find(50));
// console.log(myLinkedList.find(15));
// console.log(myLinkedList.find(2));

// Trying pop method
// myLinkedList.pop();
// myLinkedList.pop();
// myLinkedList.pop();
// myLinkedList.toString();

// Trying insertAt method
// myLinkedList.insertAt(10, 3);
// myLinkedList.insertAt(50, 2);
// myLinkedList.toString();

// Trying the removeAt method
// myLinkedList.removeAt(2);
// myLinkedList.removeAt(0);
// myLinkedList.removeAt(2);
// myLinkedList.removeAt(3);
// myLinkedList.removeAt(1);
// myLinkedList.toString();

// console.log(myLinkedList.showHead());
// console.log(myLinkedList.showTail());
