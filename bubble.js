/*jshint esversion: 6 */

function bubble(array){

  var change = true;

  console.log(array[array.length-1]);
  while (change === true){
    change = false;
    for (var i = 1; i <= array.length - 1; i++) {
      if (array[i-1] > array[i]){
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        change = true;
      }
    }
  }

  return array;
}


let array = [9, 2, 3, 5, 9, 1, 3, 5];

console.log(bubble(array));
