const fs = require('fs');

class Heap {
  buildHeap(array) {
    const arraySize = array.length;
    let heap = [];

    for (let i = this.#getParent(arraySize); i >= 0; i--) {
      heap = this.#heapify(array, i, arraySize);
    }
    return heap;
  }

  #heapify(array, index = 0, arraySize) {
    let leftIdx = this.#getLeftChild(index);
    let rightIdx = this.#getRightChild(index);
    let largest = index;
    if (leftIdx < arraySize && array[leftIdx] > array[largest]) {
      largest = leftIdx;
    }
    if (rightIdx < arraySize && array[rightIdx] > array[largest]) {
      largest = rightIdx;
    }
    if (largest !== index) {
      array = this.#swap(array, index, largest);
      return this.#heapify(array, largest, arraySize);
    } else
      return array;
  }

  sortHeap(array) {
    let heap = this.buildHeap(array);

    let heapSize = heap.length;
    let sortedHeap = heap;
    for (let i = heapSize - 1; i >= 0; i--) {
      sortedHeap = this.#swap(sortedHeap, 0, i);
      sortedHeap = this.#heapify(sortedHeap, 0, i)
    }
    return sortedHeap;
  }

  #getLeftChild(index) {
    return 2 * index + 1;
  }

  #getRightChild(index) {
    return 2 * index + 2;
  }

  #getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(array, id1, id2) {
    const temp = array[id1];
    array[id1] = array[id2];
    array[id2] = temp;
    return array;
  }

}

const heapSortArray = (elementsCount, arrayToSort) => {
  let numberedArray = arrayToSort.map(Number);
  const heap = new Heap();

  const sortedHeap = heap.sortHeap(numberedArray);

  return sortedHeap.join(' ');
}

const fileContent = fs.readFileSync("20. Пирамидальная сортировка/input.txt", "utf8");
const fileContentString = fileContent.toString().trim().split('\n');
const elementsCount = fileContentString.shift();
const result = heapSortArray(Number(elementsCount), fileContentString[0].split(' '));

fs.writeFileSync("output.txt", result);