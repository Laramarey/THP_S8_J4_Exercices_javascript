function factorial(n) {
  return (n > 1) ? n * factorial(n - 1) : 1;
	}


let number = -1;
	while(number < 0) {
	  number = prompt("Entre un nombre entier postif !");

	result = number * factorial(number-1); 
		}
	console.log(`Le resultat est ${result}`);
