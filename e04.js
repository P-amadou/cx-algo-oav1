//e04.1 Count
function countArray(array=[],element) {
    let count=0
    for (let i = 0; i < array.length; i++) {
        if (array[i]==element) {
            count++
        }
    }
    return count
}
//console.log(countArray([1,1,2,3,4],1));//renvoie 2

//e04.2 Average
function countAverage(array=[]) {
    let moy=0
    let total=0
    for (let i = 0; i < array.length; i++) {
        total+=array[i]
        moy=(total/array.length)
        
    }
    return moy
}
console.log(countAverage([1,2,3,4]));//renvoie 10/5=2