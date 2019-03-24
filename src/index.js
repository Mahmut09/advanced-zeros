module.exports = function getZerosCount(number, base) {
  var factorials = [];
  var k = 2;
  while (k < base) {
      while (base % k == 0) {
          factorials.push(k);
          base /= k;
      }
      k++;
  }
  if (base > 1) {
      factorials.push(base);
  }
  factorials.sort((a, b) => a - b);

  var zeros = [];
  var count = 1;
  for (var i = 0; i < factorials.length; i += count) {
      var counter = 0;
      for (var j = i; j < factorials.length; j++) {
          if (factorials[i] === factorials[j]) {
              counter++;
          } else {
              count = counter;
              break;
          }
      }
      var result = 0;
      var j = factorials[i];
      while (true) {
          result += (number - number % j) / j;
          j *= factorials[i];
          if (j > number) {
              break;
          }
      }
      zeros.push((result - result % counter) / counter);
  }

  return Math.min.apply(Math, zeros);
}