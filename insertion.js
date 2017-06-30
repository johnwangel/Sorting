/*jshint esversion: 6 */
function insertionSort(array){

  for (i = 1; i < array.length; i++){
    let index = array[i];
    let j = i;
    while ((j > 0) && (array[j-1] > index)){
      array[j] = array[j-1];
      j = j-1;
    }
    array[j] = index;
  }
  return array;
}

let array = [8,6,1,4,99,2,343,11,44,53,98];

console.log(insertionSort(array));