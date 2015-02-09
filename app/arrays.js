if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var i=0; i<arr.length; i++) {
            if(arr[i] === item) {
                return i;
            }
        }

        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        for(var i=0; i<arr.length; i++) {
            sum += arr[i];
        }

        return sum;
    },

    remove : function(arr, item) {
        for(var i=0; i<arr.length; i++) {
            if(arr[i] === item) {
                arr.splice(i,1);
            }
        }

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for(var i=arr.length-1; i>=0; i--) {
            if(arr[i] === item) {
                arr.splice(i,1);
            }
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.splice(arr.length-1,1);
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        var newArr = [];
        for(var i=0; i<arr2.length; i++) {
            arr1.push(arr2[i]);
        }
        return arr1;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var numOccurances = 0;

        for(var i=0; i<arr.length; i++) {
            if(arr[i] === item) {
                numOccurances ++;
            }
        }

        return numOccurances;
    },

    duplicates : function(arr) {
        var lookup = [];
        var dupes = [];

        for(var i=0; i<arr.length; i++) {

            //if in lookup
            if(lookup.indexOf(arr[i]) > -1) {
                //push in dupes
                if(dupes.indexOf(arr[i]) === -1) {
                    dupes.push(arr[i]);
                }
            } else {
                //push in lookup
                lookup.push(arr[i]);
            }
        }

        return dupes;
    },

    square : function(arr) {
        return arr.map(function(a){
            return a * a;
        });
    },

    findAllOccurrences : function(arr, target) {
        var result = [];

        //loop over arr
        for(var i=0; i<arr.length; i++) {
            //if equal target
            if(arr[i] === target) {
                //push in index in result arr
                result.push(i);
            }
        }

        //return result
        return result;

    }
  };
});
