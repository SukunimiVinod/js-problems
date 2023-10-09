/*# Digit Count

Given a number, count the number of digits. For example:

```text
318 = 3
92563 = 5
4666 = 4
314890 = 6
```
*/

function calculateDigits(number) {    
    return number.toString().length;
}

console.log(calculateDigits(318));
console.log(calculateDigits(92563));
console.log(calculateDigits(4666));
console.log(calculateDigits(314890));
