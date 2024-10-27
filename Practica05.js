// Declaramos e inicializamos el arrray con valores duplicados.
const valores = [10, 20, 20, 40, 50, 50, 60];

// Mostramos por consola los valores introducidos
console.log("--- Array de valores CON DUPLICADOS ---");
console.log(valores);

// Transformamos el array a un set para eliminar duplicados.
const setValoresUnicos = new Set(valores);

// Transformamos el set de valores únicos en un array de nuevo
const valoresUnicos=[...setValoresUnicos];

// Mostramos por consola el array de valores únicos
console.log("--- Array de valores UNICOS ---");
console.log(valoresUnicos);
