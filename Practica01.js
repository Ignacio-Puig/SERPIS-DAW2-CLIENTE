// Creación del array de países
let paises = ["España", "Francia", "Alemania", "Italia"];


// Recorre e imprime cada país
console.log("Lista de países inicial:");
paises.forEach((pais) => {
    console.log(pais);
});

// Elimina el primer país del array y reordena los indices
paises.shift();

// Recorre e imprime el array de nuevo
console.log("\nLista de países después de eliminar el primero:");
paises.forEach((pais) => {
    console.log(pais);
});
