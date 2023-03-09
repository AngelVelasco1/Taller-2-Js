let person1  = {
    nombre: prompt("1. Escriba su nombre"),
    edad: parseInt(prompt("Cual es tu edad"))
} 
let person2  = {
    nombre: prompt("2. Escriba su nombre"),
    edad: parseInt(prompt("Cual es tu edad"))} 
let person3  = {
    nombre: prompt("3. Escriba su nombre"),
    edad: parseInt(prompt("Cual es tu edad"))} 

let definirMayorNum =  Math.max(person1.edad, person2.edad, person3.edad);

let personaMayor;

if (definirMayorNum === person1.edad) {
    personaMayor = person1;
} else if (definirMayorNum === person2.edad) {
    personaMayor = person2;

} else {
    personaMayor = person3;
}

alert("La persona mayor tiene: " + definirMayorNum + " y se llama " + personaMayor.nombre);