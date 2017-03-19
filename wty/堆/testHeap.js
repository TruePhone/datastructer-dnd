import Heap from "./Heap";


var heap = new Heap();
heap.generateHeap(10);
console.log("HeapType:");
console.log(heap.getHeapType());
heap.append(5);
console.log("after append 5:");
heap.print();
heap.insert(2, 4);
console.log("after insert 4 :");
heap.print();
heap.removeTop();
console.log("after removeTop:");
heap.print();
heap.delete(2);
console.log("after delete index:2 :");
heap.print();
heap.toggleMaxOrMinHeap();
console.log("toggleHeap:");
heap.print();
console.log("HeapType:");
console.log(heap.getHeapType());
heap.append(5);
console.log("after append 5:");
heap.print();
heap.insert(2, 4);
console.log("after insert 4 :");
heap.print();
heap.removeTop();
console.log("after removeTop:");
heap.print();
heap.delete(2);
console.log("after delete index:2 :");
heap.print();