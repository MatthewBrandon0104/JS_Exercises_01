function add(a,b) {
    return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arg1) {
    if (arg1.length === 0) {
        return 0;
    }
    return arg1.reduce((total, num) => {return total + num;});
}

function multiply (arg1) {
	return arg1.reduce(function(test, num) {
         return test * num;
    });
}

function power(a, b) {
    let product = 1;
    for (i = 0; i < b; i++) {
        product *= a;
    }
    return product;
}

function factorial(a) {
    let product = 1;
    for (i = a; i > 0; i--) {
        product *= i;
    }
    return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}