// Inicializamos un array para recoger las frecuencias de los números del 1 al 10
const frecuencias = [0,0,0,0,0,0,0,0,0,0];

// Generamos 10.000 números aleatorios entre 1 y 10 y registramos las frecuencias
for (let i = 0; i < 10000; i++) {
  const numAleatorio = Math.floor(Math.random() * 10); // Genera un número aleatorio del 0-10
  frecuencias[numAleatorio]++;  // Añade una ocurrencia al indice correspondiente al número aleatorio.
}

// Mostramos el resultado en consola: mediante el valor +1 para pasar de 0-9 a 1-10
cantidadTotal=0;
console.log('\nFrecuencias: de mil números aleatorios del 1 al 10 \n------------------ ');

frecuencias.forEach(recuento);
  function recuento (cantidad, indice) {
    console.log(`Número ${indice+1}: ${cantidad}`);
    cantidadTotal+=cantidad;
  }

  console.log('------------------\n TL. ocurr:', cantidadTotal);