function upperCase(code) {
    return (code >= 65 && code <= 90)
  }

function lowerCase(code) {
    return (code >= 97 && code <= 122)
  }

function howManyCamelCase(str='') {
    let error="Il y a une erreur"
    let count=0
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
        if (str[i].charAt(lowerCase(code))) {
            if(upperCase(code)){
                count+=1
            }
        }
    }
    return count
    
}

console.log(howManyCamelCase('unMotAlphabet'));