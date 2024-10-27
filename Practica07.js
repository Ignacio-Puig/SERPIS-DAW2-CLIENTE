// Creamos una función que genere la combinación de números de cada combinación.
function generarCombinacion() {
  const combinacion = [];
  while (combinacion.length < 6) {
    const numero = Math.floor(Math.random() * 48) + 1;
    if (!combinacion.includes(numero)) {
      combinacion.push(numero);
    }
  }
  return combinacion.sort((a, b) => a - b); // Ordenamos los números.
}

// Generamos las 50 combinaciones solicitadas.
console.log('\n --- RESULTADOS DE LOS SORTEOS: ---')
for (let i = 0; i < 50; i++) {
  console.log('Sorteo nº:', i,'-->'  ,generarCombinacion());
}