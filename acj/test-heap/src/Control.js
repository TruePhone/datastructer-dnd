import Heap from './Heap'


let observer = null;

let heap = new Heap();
heap.generateHeap(10);

export function getDataStructer() {
    return heap;
}


console.log('clientWidth');
console.log(document.body.clientWidth);
let dataNodeWidth = 60;
export function getMaxNum(){
  return Math.floor(document.body.clientWidth /dataNodeWidth) -1;
}

function emitChange() {
  //console.log('emitChange');
  observer();
}

export function observe(o) {
  console.log('observe');
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;

  return () => {
    observer = null;
  };
}

export function flush() {
  emitChange();
}
export function getLevel(i){
  let ans = 0;

  while (i !== 0 ){
    ans ++;
    i = Math.floor((i-1)/2);
  }
  return ans;
}