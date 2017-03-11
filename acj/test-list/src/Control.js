import ArrayList from './ArrayList'
// import WaitingData from './WaitingData'

let observer = null;

let arrayList = new ArrayList();
arrayList.append(1);
arrayList.append(2);

export function getDataStructer(toX, toY) {
    return arrayList;
}

// export function getWaitingData(toX, toY) {
//     return WaitingData;
// }
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