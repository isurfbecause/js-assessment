if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        var result = fn.call(obj);
        return result;
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var result = [];
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
            result.push(prop + ': ' + obj[prop]);
            }
        }
        return result;
    }
  };
});
