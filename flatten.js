const flatten = (array2D) => {
    let arrayFlatten = [];
    for ( let i = 0; i < array2D.length; i++) {
        arrayFlatten = arrayFlatten.concat(array2D[i]);
    }
    return arrayFlatten;
}

let abc = [[1,2],[3,4],[5,6]];
console.log(flatten(abc));