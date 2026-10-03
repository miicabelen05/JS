const saludo = "¡Bienvenido a nuestra página web!";
console.log(saludo);

const nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
const ciudad = prompt("¿Cuál es tu ciudad?");

alert("Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad + ".");
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Ciudad: " + ciudad);

edad = parseInt(edad); // Convertir edad a número entero
alert("Tu edad en 5 años será: " + (edad + 5));
console.log("Edad en 5 años: " + (edad + 5));
