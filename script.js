let num = prompt("Ingrese el numero que desee");

if (num % 2 == 0 && num > 10) {
    alert("El numero es par y mayor a 10")
} else if(num % 2 == 0 && num < 10){
    alert("El numero es par y menor a 10")
} else if (num % 2 !== 0 && num < 10) {
    alert("El numero es impar, y es menor a 10")
}
else {
    alert("El numero impar, y es mayor a 10")
}