var sumAll = function(a, b) {
    let sum = 0;
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    if (a < 0 || b < 0 || isNaN(a) == true || isNaN(b) == true || typeof a === "string" || typeof b === "string") {
        return "ERROR";
    }
    for (i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
