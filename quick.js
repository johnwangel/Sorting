function  quick(array, left, right)
{
  var i = left;
  var j = right;
  var tmp;
  pivotidx = (left + right) / 2;
  var pivot = parseInt(array[pivotidx.toFixed()]);
  while (i <= j){
    while (parseInt(array[i]) < pivot){
     i++;
    }
    while (parseInt(array[j]) > pivot){
      j--;
    }
    if (i <= j) {
      tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
      i++;
      j--;
    }
  }

  if (left < j)
    quick(array, left, j);
  if (i < right)
    quick(array, i, right);
  return array;
}

let array = [3,5,33,1,888,33,4,2,9,11,10];
console.log(quick(array, 0, array.length - 1));