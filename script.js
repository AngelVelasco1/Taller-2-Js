let numbers = [];
let sum = 0;
let prom = 0;
let digitados = 0;

do {
    let num = parseFloat(prompt("Digite un numero"));
     if(num == 0 || isNaN(num)) {
        break;
    }

    numbers.push(num);

    sum += num;
    digitados = numbers.length;
    prom = sum / digitados;
    maxNum = Math.max(...numbers);
    minNum = Math.min(...numbers);
} 
  while(confirm("Vas a añadir un nuevo numero?")) {
}
alert(`La suma es de: ${sum} y el promedio de: ${prom} `);
alert(`Se digitaron: ${digitados} numeros. El mayor es: ${maxNum}🔼 y el menor: ${minNum}🔽`);

