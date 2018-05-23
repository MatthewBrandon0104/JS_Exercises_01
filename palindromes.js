var palindromes = function(word) {
    let string = word.toLowerCase();
    let match = string.match(/[a-z]/gim);
    if (match.join("") === match.reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
