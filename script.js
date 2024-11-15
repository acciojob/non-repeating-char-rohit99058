function firstNonRepeatedChar(str) {
 // Write your code here
let freqObj = {}

for (let i = 0; i < str.length; i++) {
    if (!freqObj[str.charAt(i)]) {
        freqObj[str.charAt(i)] = 1
    } else {
        freqObj[str.charAt(i)] = freqObj[str.charAt(i)] + 1
    }
}

for (let item in freqObj) {
    if (freqObj[item] == 1) {
        return item;
    } else {
        return null
    }
}
console.log(freqObj);
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
