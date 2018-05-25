var fibonacci = function(x) {
    if (typeof(x) === "string") {
         x = parseInt(x);
    }
    if (x === 1 || x === 2) {
  	return 1;
  } else if (x < 0) {
      return "OOPS";
  }
    let a = 1;
    let b = 1;
    let c = 0;
    let result = 0;
    for (i = 2; i < x; i++) {
        c = a + b;
        a = b;
        b = c;
        result = c;
    }
	return result;
}

module.exports = fibonacci
