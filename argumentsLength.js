function unminifiedArguments(fn) {
      return function(x1, x2) {
        console.log(arguments);
        return fn.apply(this, arguments);
      };
}

function minifieddArguments(fn) {
      return function() {
        console.log(arguments);
        return fn.apply(this, arguments);
      };
}

console.log(unminifiedArguments(function() {}).length);
console.log(minifieddArguments(function() {}).length);
