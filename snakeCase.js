var snakeCase = function(arg1) {
    let string = arg1;
    string = string.replace(/\.+/g, " ");
    
    if (string.indexOf(" ") < 0) {
        string = string.replace(/([A-Z])/g, " $1");
    }
    
    return string.trim().toLowerCase().replace(/[,\?\!\']/g, "").replace(/\-/g, " ").split(" ").join("_");
}

module.exports = snakeCase
