

## README del trabajo sobre Cifrado Cesar

*Creadora: Vanessa Martinez Navarro.*

*Este achivo es la version 0.0.1*

*Creado con la herramienta Sublime Text.*

_Utiliza la tecnologia de javascript y html._

*Funciona a traves de ventanas emergentes en las cuales se les ingresa informacion, devolviendo a traves de otra ventana la respuesta.*

*Algoritmo:*

Se crea una funcion principal
{
	Se crea una variable promp para que el usuario ingrese una alternativa;
	
	{
		Si
		{
			la respuesta es 1
			{
 				Se ejecuta la funcion cipher;
 			}
		}
		Si
		{
			la respuesta es 2
			{
				Se ejecuta la funcion decipher;
			}
		}
 		De lo contrario
 		{
			Se ejecuta una alerta que solicita que se ingrese una respuesta valida;
 		}
 	}Si lo ingresado no es lo correcto, se seguira ejecutando el bucle pidiendole al usuario una respuesta
}

Se crea la funcion cipher
{
	Se crea una variable newString (que es array) para ingresar la respuesta del usuario;

	Se crea una iteracion for para recorrer el array
	{
		Si 
		{
			lo ingresado contiene un espacio, este hay que conservarlo;
		}
		De lo contrario
		{
			+ Se crea una variable word que contendra el indice del codigo ASCII;
			+ Se realiza la operacion del cifrado.
			+ Pasara a letra el indice que ha sido cifrado
			+Se ingresan los indices a la variable newArray;
		}

		Se retorna una alerta con la respuesta;
}


Se crea la funcion decipher
{
	Se crea una variable newString (que es array) para ingresar la respuesta del usuario;

	Se crea una iteracion for para recorrer el array
	{
		Si 
		{
			lo ingresado contiene un espacio, este hay que conservarlo;
		}
		De lo contrario
		{
			+ Se crea una variable word que contendra el indice del codigo ASCII;
			+ Se realiza la operacion del decifrado.
			+ Pasara a letra el indice que ha sido cifrado
			+ Se ingresan los indices a la variable newArray;
		}

		Se retorna una alerta con la respuesta;
}	














