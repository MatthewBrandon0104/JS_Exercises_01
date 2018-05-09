var ftoc = function(far) {
    let cel = (far - 32) * 5 / 9;
    return Number(cel.toFixed(1));
}

var ctof = function(cel) {
    let far = cel * 1.8 + 32;
    return Number(far.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
