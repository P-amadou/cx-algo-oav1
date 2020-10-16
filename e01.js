function upperCase(code) {
    return (code >= 65 && code <= 90)
  }

function lowerCase(code) {
    return (code >= 97 && code <= 122)
  }

function howManyCamelCase(str='') {
    let result
    let count=0
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
        if (str[i].charAt(lowerCase(code))) {
            console.log("test");
            if(str[i].charAt(upperCase(code)))
            console.log("test2");
            count+=1
        }
    }
    return count
    
}

console.log(howManyCamelCase('unMotABC'));