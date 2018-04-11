//Se pregunta al usuario el número de la tarjeta a verificar.
var cardNumbers = prompt('Ingresa el número de tarjeta (16 digitos)');

//Se valida que no escriban un campo vacio o tipos de datos diferentes a los que solicitan.

  if (cardNumbers == '') {
    alert('Tarjeta invalida, vuelve a intentarlo');
  }//Se cierra while
    else if (cardNumbers === NaN ) {
    alert('Tarjeta invalida, vuelve a intentarlo');
  } else {
//Se crea función isValidCard para verificar si es una tarjeta valida o no cumpliendo con las condiciones del algoritmo de Luhn.
function isValidCard (cardNumbers ) {
// Se invierten los números que se introdujeron.
  var cardNumbersReverse = (cardNumbers.split('')).reverse();
  var pairNumbers = [];
//Se revisa si es impar se suma el digito, multiplicamos por dos y se suman los digitos de ese número, si el doble de ese digito es mayor o igual a 10.
  for (var i = 0; i<cardNumbersReverse.length; i++){
    if(i % 2 !== 0) {
      var multiplication =cardNumbersReverse[i] * 2
      if (multiplication >= 10) {
        var sum = 0;
//Se verifica que se cumplan el resto de las condiciones del algoritmo.
        while (multiplication) {
          sum += multiplication % 10;
          multiplication = Math.floor(multiplication/10);
        }//Se cierra el while
        pairNumbers.push(sum);
        //} de abajo cierra if dentro de if
      } else {
        pairNumbers.push(multiplication);
      }//Se cierra else
      //} de abajo se cierra if dentro del for
    } else {
      pairNumbers.push(parseInt(cardNumbersReverse[i]));
    } //Se cierra else
    var numberToValidate = 0;
    for (var j = 0; j<pairNumbers.length; j++) {
      numberToValidate += pairNumbers[j];

    } // Se cierra el último for
    if (numberToValidate % 10 === 0) {
      //Si las condiciones del algoritmo se cumplen retorna 'Tarjeta Valida'
      return 'Tarjeta Valida';
    } else {
      //Si las condiciones señaladas al inicio o en el proceso de comprobación del algoritmo no se cumplen retorna 'Tarjeta invalida, vuelve a intentarlo'
      return 'Tarjeta invalida, vuelve a intentarlo';
    } // Se cierra else
   } // Se cierra for
  }//Se cierra la función isValidCard
}//Se cierra el else

alert(isValidCard(cardNumbers));

document.getElementById('Result').innerHTML = isValidCard(cardNumbers);
