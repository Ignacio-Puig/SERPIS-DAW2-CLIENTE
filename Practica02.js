// Creamos el Array y le asignamos valores
const letras=["A", "B", "C"];
//Añadimos las letras solicitadas al final del array
letras.push("D", "E");
// Eliminamos el primer y último elemento del Array
letras.shift();
letras.pop();
// Recorremos el Array para sacarlo por consola
letras.forEach ((letra)=>{
console.log(letra);
});