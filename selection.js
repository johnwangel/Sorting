function selection(array) {
  for (var i = 0; i < array.length - 1; i++) {
    currentMin = array[i] ;
    currentMinIndex = i;

    for (j = i + 1; j < array.length; j++) {
      if (currentMin > array[j] ) {
        currentMin = array[j];
        currentMinIndex = j;
      }
    }

    if (currentMinIndex != i) {
      array[currentMinIndex] = array[i];
      array[i] = currentMin;
    }
  }
  return array;
}

var array = [5,43,3,1,343,4,34,6,8,334,66,1];

console.log(selection(array));