if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      if(num % 15 === 0) {
        // if the number is divisible by 3 and 5, the function should return
        // 'fizzbuzz';
        return 'fizzbuzz';
      }
      else if(num % 5 === 0) {
        // if the number is divisible by 5, the function should return 'buzz';
        return 'buzz';
      }
      else if(num % 3 === 0) {
        // if the number is divisible by 3, the function should return 'fizz';
        return 'fizz';
      } else {
        // was provided or the value provided is not a number
        if(isNaN(num)) {
          return false;
        } else {
          // otherwise the function should return the number, or false if no number
          return num;
        }
      }
    }
  };
});
