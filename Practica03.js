let data = [
  {name: "Nacho", telephone: "966112233", age: 40},
  {name: "Ana", telephone: "911223344", age: 35},
  {name: "Mario", phone: "611998877", age: 15},
  {name: "Laura", telephone: "633663366", age: 17}
  ];
// Introducir nuevos datos al final de array.
  data.push(
    {name: "Pedro", telephone: "611944444", age: 25},
    {name: "Julia", phone: "633232323", age: 37}
  );
//Array con nuevos datos
  console.log("\n --- Array con nuevos datos: ---");
  data.forEach((dato)=>{
    console.log(dato);
  }
)
// Array ordenado por edad:
data.sort((a,b)=>a.age-b.age);
console.log("\n --- Array ordenado por EDAD: ---");
data.forEach((dato)=>{
  console.log(dato);
}
)
// Array ordenado por nombre.
data.sort((a,b)=>a.name.localeCompare(b.name) );
console.log("\n --- Array ordenado por NOMBRE: ---");
data.forEach((dato)=>{
  console.log(dato);
}
)
// Array filtrado con edades mayores a 30 años.
const dataFiltered=(data.filter(dato=>dato.age>30));
console.log("\n --- Array filtrado EDAD > 30 ---");
dataFiltered.forEach((dato)=>{
  console.log(dato);
}
)