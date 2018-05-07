var repeatString = function(string, num) {
    if (num === 0) {
        return "";
    } else if (num < 0 === true) {
        return "ERROR";
    } else {
        let x = string;
        for (i = 1; i < num; i++) {
            x += string;
            }
        return x;
    }
}

module.exports = repeatString
