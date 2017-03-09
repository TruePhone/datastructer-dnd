import ArrayList from './ArrayList'
import WaitingData from './WaitingData'

let observer = null;

let arrayList = new ArrayList;
arrayList.append(1);
arrayList.append(2);
console.log(arrayList.getLength());

export function getDataStructer(toX, toY) {
    return arrayList;
}

export function getWaitingData(toX, toY) {
    return WaitingData;
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
  emitChange();

  return () => {
    observer = null;
  };
}

export function flush() {
  emitChange();
}