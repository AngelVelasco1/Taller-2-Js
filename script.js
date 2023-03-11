let atlethesNames = [];
let meterMark = [];

do {
    atlethesNames.push(prompt("Escriba su nombre"));
    meterMark.push(parseFloat(prompt("Cual es tu marca de salto en metros?"))); 
}
    while(confirm("¿Vas a añadir mas atletas?")) {  
  }

let championAtlethe = meterMark.indexOf(Math.max(...meterMark));
let record = (meterMark[championAtlethe] > 15.5);

if (record) {
    alert(`La atleta campeona es ${atlethesNames[championAtlethe]} con un salto de ${meterMark[championAtlethe]} metros superando el record🤑`);

} else {
    alert(`La atleta campeona es ${atlethesNames[championAtlethe]} pero no hizo record😖`);
}
