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
//console.log(countAverage([1,2,3,4]));//renvoie 10/5=2.5

//e04.3 Min
function countMin(array=[]) {
    let min
    for (let i = 0; i < array.length; i++) {
       //let tmp=array[Math.floor(Math.random() * array.length)]
       let tmp2=array[0]
       if (tmp2<array[i]) {
           min=tmp2
       }else if (tmp2>array[i]) {
           min=array[i]
           return min
       } 
    }
    return min
    //return Math.min(... array)

}
//console.log(countMin([1,2,3,4,0,5]));//renvoie 0

//e04.4 Max
function countMax(array=[]) {
/*let max
    for (let i = 0; i < array.length; i++) {
        let tmp=array[0]
        if (tmp>array[i]) {
            max=tmp
            console.log('val max',max);
        }else if (tmp<array[i]) {
            max=array[i]
        }
          
    }
    return max*/
    return Math.max(... array)
}
console.log(countMax([1,2,3,0,4,25]));//renvoie 25

//e04.5 Shift
function fShift(array=[]) {
  array.shift()  
  return array
}
//console.log(fShift([1,2,3,4,5]));//renvoie [2,3,4,5]

//e04.6 Diff
function diff(array=[]) {
    
}
//console.log(diff([1,2,3,4,5]));//renvoie 
