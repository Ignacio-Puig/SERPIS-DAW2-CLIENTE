// Declaramos e inicializamos el arrray.
const numeros = [10, 20, 30, 40, 50, 60];
// Desestructuración: primero y segundo elementos en variables y el resto en un array.
const [primero, segundo, ...resto] = numeros;
// Mostramos por consola
console.log("Primer número:", primero);
console.log("Segundo número:", segundo);
console.log("Resto de números:", resto);