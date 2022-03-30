function sumaNumeros() {
  //Metodo que devuelve una sumatoria entre numeros enteros (Int)
  let num1 = parseInt(prompt("Ingrese un numero"));
  let num2 = parseInt(prompt("Ingrese otro numero"));
  let result = num1 + num2;
  document.write(`
  <p>
    ${result}
  </p>`);
}

function confimarEdad() {
  // Se ingresa el nombre del usuario y se verifica la edad del mismo
  let nombre = prompt("Ingrese su nombre de usuario");
  let edad = parseInt(prompt("Ingrese su edad"));
  let confirmAge = confirmarAge(edad)
    ? "Eres mayor de edad"
    : "Eres menor de edad";
  alert("Usuario : " + nombre + " y eres : " + confirmAge);
}

function confirmarAge(edad) {
  //Se confirma la edad del usuario con un operador ternario
  parseInt(edad);
  return edad >= 18 ? true : false;
}

function setNombre() {
  //Metodo de seteo extendible a todas las clases
  let name = prompt("Ingrese su nombre");
  let luckyNumber = parseInt(prompt("Ingrese su numero de la suerte"));
  alert("Cantidad de letras que tiene su nombre " + name.length);
  alert(
    "La suma entre el numero de la suerte y la cantidad de letras son de " +
      (name.length + luckyNumber)
  );
}
