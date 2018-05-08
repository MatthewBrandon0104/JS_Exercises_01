var removeFromArray = function() {
    let arr = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        if (arguments[i] !== undefined && arr.indexOf(arguments[i]) > -1) {
            arr.splice(arr.indexOf(arguments[i]), 1);
        } else {continue;}
    }
    return arr;
}

module.exports = removeFromArray
