

const StatsRVM = (function() {
  "use strict";
  function square(x) {
    return x * x;
  }
  function sum(array, callback) {
    if (typeof callback === "function") {
      array = array.map(callback);
    }
    return array.reduce(function(a,b) { return a + b; });
  }
  function mean(array) {
    return sum(array) / array.length;
  }
  function sd(array) {
    return sum(array,square) / array.length - square(mean(array));
  }
  return {
    meanOfValues: mean,
    standardDeviation: sd
  };
}());

export default StatsRVM;