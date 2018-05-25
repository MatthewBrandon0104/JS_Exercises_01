const alpha = "abcdefghijklmnopqrstuvwxyz".split("");

var caesar = function(string, factor) {
	let array = string.split("");
  let newString = [];
  let isUpper = false;
  
  for (i = 0; i < array.length; i++) {
    if (/[^a-z^A-Z]+/.test(array[i]) === true) {
    	newString.push(array[i]);
      isUpper = false;
      continue;
    }
    
    let lower = array[i].toLowerCase();
    let x = alpha.indexOf(lower);
    let newIndex = shift(x, factor);
    console.log(newIndex);
    if (array[i].toUpperCase() === array[i]) {
    	newString.push(alpha[newIndex].toUpperCase());
    } else {
    	newString.push(alpha[newIndex]);
    }
  }
  
  return newString.join("");
}

function shift(current, num) {
	let oldIndex = current;
  let newIndex = current;
  
  if (current + num < 0) {
  	for (j = 0; j < num * -1; j++) {
    	newIndex -= 1;
      if (newIndex < 0) {
      	newIndex = 25;
      }
    }
  } else if (current + num > 25) {
  	for (j = 0; j < num; j++) {
    	newIndex += 1;
      if (newIndex > 25) {
      	newIndex = 0;
      }
    }
  } else {
  	newIndex = current + num;
  }
  return newIndex;
}

module.exports = caesar
