function flattenWithPosition (array2D) {
    let newArray = []
    for (let i = 0 ; i < array2D.length ; i += 1){
        for (let j = 0 ; j < array2D[i].length ; j += 1) {
            newArray = newArray.concat(`${array2D[i][j]} is at ${i}, ${j}`)
        }
    }
    return newArray
}

let abc = [[1,2],[3,4],[5,6]];
console.log(flattenWithPosition(abc));