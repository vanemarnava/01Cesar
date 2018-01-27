

function principal(option) {
  do {
    var option = prompt('Ingresa lo que deseas hacer: \n 1- Cifrar o 2-Decifrar');
    if (option === '1') {
    	var input = prompt('Ingresa el texto que quieres cifrar:');
      var str = input.match(/\d+/g); 
      if (str !== null) {
        alert('Ingresa un texto.');
        continue;
      } else {
        return cipher(input);
      }
    } else if (option === '2') {
      var input2 = prompt('Ingresa lo que quieres decifrar');
      var str = input2.match(/\d+/g);
      if (str !== null) {
        alert('Ingrese texto');
        continue;
      } else {
        return decipher(input2);
      }
    } else {
      alert('Ingresa un número válido, por favor.');
    }
  } while (option !== 1 || option !== 2);
}

principal();

function cipher(string) {
  var newString = []; /* agrega la frase ingresada a un array vacio*/
	
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') { // si en lo ingresado hay un espacio, este se debe devolver 
      newString = newString + ' ';
    } else if (string[i] === string[i].toLowerCase()) {
      var word = string.charCodeAt(i); /* pasa el contenido que tiene el indice al codigo ascii*/
      word = (((word - 97) + 33) % 26) + 97; /* operacion de cifrado*/
      word = String.fromCharCode(word); /* pasa a letra el indice cifrado en el acsii*/
      newString = newString + word;
    } else {
      var word = string.charCodeAt(i);
      word = (((word - 65) + 33) % 26) + 65;
      word = string.fromCharCode(word);
      newString = newString + word;
    }
  }
	
  return alert('Tu nuevo codigo cifrado es: ' + newString); /* ventana que se muestra con el resultado cifrado*/
}


function decipher(string) {
  var newString = []; /* agrega la frase ingresada a un array vacio */
	
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      newString = newString + ' ';
    } else if (string[i] === string[i].toLowerCase()) {
      var word = string.charCodeAt(i); /* pasa el contenido que tiene el indice al codigo ascii*/
      word = ((((word - 97) - 7) + 26) % 26) + 97; /* operacion de decifrado*/
      word = String.fromCharCode(word); /* pasa a letra el indice cifrado en el acsii*/
      newString = newString + word; 
    } else {
      var word = string.charCodeAt(i);
      word = ((((word - 65) - 7) + 26) % 26) + 65;
      word = string.fromCharCode(character);
      newString = newString + word;
    }
  }
  return alert('Tu nuevo codigo decifrado es: ' + newString); /* ventana que se muestra con el resultado decifrado */
}