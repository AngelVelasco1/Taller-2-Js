let = nameList = [];
let = genderList = "";
let = noteList = [];

let masculine = [];
let femenine = [];



do {
    nameList.push(prompt("Escribe tu Nombre:"));
    genderList = (prompt("Escribe tu Género (M - F)"));

    if(genderList == "M" || genderList == "m") {
        masculine.push(1);

    } else if(genderList == "F" || genderList == "f") {
        femenine.push(1);
    }

    noteList.push(parseFloat(prompt("Escribe tu Nota:")));


} while(confirm("Quieres añadir mas estudiantes?"));

notaMax = Math.max(...noteList);
notaMin = Math.min(...noteList);

nombreMax = noteList.indexOf(Math.max(...noteList));
nombreMin = noteList.indexOf(Math.min(...noteList));

alert(`La mayor nota es ${notaMax} y su nombre es ${nameList[nombreMax]} y la menor nota es ${notaMin} y su nombre es ${nameList[nombreMin]} y hay ${masculine.length} hombres y ${femenine.length} mujeres`);
