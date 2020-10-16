function marsos(str='') {
    let count=0
    for (let i = 0; i < str.length; i++) {
        if (str[i]!=="S"&&str[i+1]!=="0"&&str[i+2]!=="S") {
         count+=1  
        }
    }    
   return count
}

console.log(marsos('SFFSOSSISSOW'));
