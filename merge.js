function merge(array){

    if (array.length < 2) {
        return array;
    }

    var middle = Math.floor(array.length / 2),
        left = array.slice(0, middle),
        right = array.slice(middle);

    return mergelists(merge(left), merge(right));
}

function mergelists(left, right){
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

let array = [5,15,1,2,99,3,1,344,50,14,13,64];


console.log(merge(array));