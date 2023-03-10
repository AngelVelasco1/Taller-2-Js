let num1 = parseFloat(prompt("Escriba el primer numero"));
let num2 = parseFloat(prompt("Escriba el segundo numero"));

let suma = num1 + num2;
let resta = num1 - num2;

let producto = num1 * num2;
let division = num1 / num2;
if (num1 > num2) {
    alert(("La suma de los numeros es: " )+ suma  + (" y la diferencia es: " + resta));
} else {
    alert(("El producto de los numeros es: " )+ producto  + (" y la division es: " + division))
}