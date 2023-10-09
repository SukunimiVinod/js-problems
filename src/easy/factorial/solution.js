/*
# Factorial

Find the product of all positive integers less than or equal to any given number. 
This is known as the _factorial_ (denoted by _!_):

`5! = 5 x 4 x 3 x 2 x 1 = 120`
*/


function factorialize(num) {
    if (num < 0) {
        console.log('if section. num is: '+num + '\n');
         return -1;
    }else if (num == 0)  {
        console.log('else if section: num is: '+num + '\n');
        return 1;
    }else {
        console.log('else section. num is: '+num + '\n');
        return (num * factorialize(num - 1));
    }
  }
  
  
console.log(factorialize(5));