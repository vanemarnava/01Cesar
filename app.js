
function principal(option)//pregunta que es lo que se quiere hacer
{
	do{ //do - while para que siga preguntando si no se ingresa lo esperado
		var respuesta = prompt("Ingresa lo que deseas hacer: 1- Cifrar o 2-Decifrar");

		if(respuesta != "") // si se ingresa algo, continuar.
		{
			if(respuesta == "1")
			{
				
				var respuesta2 = prompt("Ingresa lo que quieres cifrar");

				if ( respuesta2 == "" || respuesta2 == 1 || respuesta2 == 2 || respuesta2 == 3 || respuesta2 == 4 || respuesta2 == 5 || respuesta2 == 6 
|| respuesta2 == 7 || respuesta2 == 8 || respuesta2 == 9 || respuesta2 == 0); 
				{
					cipher();// si la respuesta ingresada es la correcta llamara a la funcion cifrar
				}
				else
				{
					alert("no puedes ingresar numeros"); //arrojara un mensaje que advierte que no se ingreso ningun numero
				}	
			}

			else if (respuesta == "2")
			{
				var respuesta3 = promp("Ingresa lo que quieres decifrar");
				decipher();
			}
			else 
			{
				alert ("Ingresa una opcion valida");//arrojara un mensaje que advierte que no se ingreso ningun numero
			}
		}

	}while (option == "" || (option != "1" && option !="2"));// hay que poner una condicion que 
	//no se cumpla, ya que asi seguira en el bucle hasta que se ingrese lo deseado y ejecute lo correspondiente
}


function cipher(string)
{
	var newString = []; //agrega la frase ingresada a un array vacio
	
	for(var i = 0; i < string.length; i++) // como array recorrera cada letra 
	{
		
		if( string[i] == " ") // si en lo ingresado hay un espacio, este se debe devolver 
		{
			newString = newString + " ";

		}

		else
		{
			var word = string.charCodeAt(i)// pasa el contenido que tiene el indice al codigo ascii
			word = (((word - 65) + 33) % 26) + 65; // operacion de cifrado
			word = String.fromCharCode(word); //pasa a letra el indice cifrado en el acsii
		
			newString = newString + word;
		}
	}
	
		return alert ("Tu nuevo codigo cifrado es: " + newString); // ventana que se muestra con el resultado cifrado

}

/*
		if( string[i] == " ") // si existe espacio, sacarlo
		{
			//newString.pop(string.charCodeAt(i));
			var array = string.split(" ");
			array = array.join("");
		}
*/


function decipher(string)
{
	var newString = []; //agrega la frase ingresada a un array vacio
	
	for(var i = 0; i < string.length; i++) // como array que recorrera cada letra 
	{

		if( string[i] == " ") // si en lo ingresado hay un espacio, este se debe devolver 
		{
			newString = newString + " ";
		}

		else
		{
			var word = string.charCodeAt(i)// pasa el contenido que tiene el indice al codigo ascii
			word = ((((word - 65) + 33) + 26) % 26) + 65; // operacion de decifrado
			word = String.fromCharCode(word); //pasa a letra el indice cifrado en el acsii
		
			newString = newString + word; 
		}
	}
	
	return alert ("Tu nuevo codigo decifrado es: " + newString);// ventana que se muestra con el resultado decifrado

}


principal();




