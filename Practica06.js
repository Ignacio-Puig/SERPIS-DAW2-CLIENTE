// Declaramos un Map
const personas = new Map();

// Agregarmos elementos al Map
personas.set('Ignacio', 59);
personas.set('Andres', 22);
personas.set('Jaime', 33);

// Actualizar la edad de Ana
personas.set('Andres', 26);

// Iterar sobre el Map y mostrar los elementos
for (const [nombre, edad] of personas) {
  console.log(`${nombre}: ${edad} años`);
}