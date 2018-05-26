function translate(string) {
const vowels = new RegExp('[aeiou]')
let array = string.split(' ');
  
  for (i = 0; i < array.length; i++) {
  	if (array[i].charAt(0) === "q" && array[i].charAt(1) === "u") {
        let newEl = array[i].slice(2);
        array[i] = newEl + "quay";
    } 
      else if (array[i].charAt(1) === "q" && array[i].charAt(2) === "u") {
        let newEl = array[i].slice(3);
        array[i] = newEl + array[i].charAt(0) + 'quay';
    }  
      else if (vowels.test(array[i].charAt(0)) === true ) {
    	array[i] = array[i] + 'ay';
    } 
      else if (array[i].slice(3) === "sch") {
        let newEl = array[i].slice(3);
        array[i] = newEl + "schay";
    } 
      else if (vowels.test(array[i].charAt(0)) === false && vowels.test(array[i].charAt(1)) === false && vowels.test(array[i].charAt(2)) === false) {
    	let newEl = array[i].split("").splice(3).join("");
        array[i] = newEl + array[i].charAt(0) + array[i].charAt(1) + array[i].charAt(2) + 'ay';
    }  
      else if (vowels.test(array[i].charAt(0)) === false && vowels.test(array[i].charAt(1)) === false) {
    	let newEl = array[i].split("").slice(2).join("");
        array[i] = newEl + array[i].charAt(0) + array[i].charAt(1) + 'ay';
    } 
      else if (vowels.test(array[i].charAt(0)) === false) {
    	let newEl = array[i].split("").slice(1).join("");
        array[i] = newEl + array[i].charAt(0) + 'ay';
    }
  }
return array.join(" ");
}


module.exports = {
	translate
}

