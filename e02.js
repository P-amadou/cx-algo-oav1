
function IsAPangrams(str='') {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let regex = /\s/g;
    let lowercase = str.toLowerCase().replace(regex, "");
  
   for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return false
    }
   }
  return true
}

console.log(IsAPangrams('Hello Efrei'));
console.log(IsAPangrams('The quick brown fox jumps over the lazy dog'));