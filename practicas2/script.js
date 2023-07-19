const msg = document.getElementById("msg");
const boton1 = document.getElementById("boton-1");
const boton2 = document.getElementById("boton-2");
const boton3 = document.getElementById("boton-3");
const boton4 = document.getElementById("boton-4");
const boton5 = document.getElementById("boton-5");

// Practica 1
const encontrarNumeroMasGrande = () => {
  let numeros = [];

  while (true) {
    let entrada = prompt(
      "Ingrese un número (o haga clikc en 'cancel' para detenerse):"
    );

    if (entrada === null) {
      break;
    }

    let numero = parseFloat(entrada);

    if (isNaN(numero)) {
      alert("Debe ingresar un número válido. Inténtelo de nuevo.");
      continue;
    }

    numeros.push(numero);
  }

  if (numeros.length === 0) {
    msg.innerHTML = "No se ingresaron números.";
  } else {
    let numeroMasGrande = Math.max(...numeros);
    msg.innerHTML = "El número más grande ingresado es: " + numeroMasGrande;
  }
};

boton1.addEventListener("click", encontrarNumeroMasGrande);

// Practica 2

const esPalindromo = (palabra) => {
  // Convertimos la palabra a minúsculas y eliminamos los espacios
  palabra = palabra.toLowerCase().replace(/\s/g, "");

  // Verificamos si la palabra es igual a su reverso
  return palabra === palabra.split("").reverse().join("");
};

const validarPalindromo = () => {
  let entrada = prompt("Ingrese una palabra o frase:");

  if (entrada === null) {
    return;
  }

  if (esPalindromo(entrada)) {
    msg.innerHTML = "La palabra o frase es un palíndromo.";
  } else {
    msg.innerHTML = "La palabra o frase NO es un palíndromo.";
  }
};

boton2.addEventListener("click", validarPalindromo);

function sumaDigitos(numero) {
  let suma = 0;

  while (numero > 0) {
    suma += numero % 10;
    numero = Math.floor(numero / 10);
  }

  return suma;
}

// Practica 3
function calcularSumaDigitos() {
  let numero = prompt("Ingrese un número:");

  if (numero === null) {
    return;
  }

  numero = parseInt(numero);

  if (isNaN(numero)) {
    alert("Debe ingresar un número válido. Inténtelo de nuevo.");
    return;
  }

  let numeroIncial = numero;
  let suma = 0;

  while (numero > 0) {
    suma += numero % 10;
    numero = Math.floor(numero / 10);
  }

  msg.innerHTML = "La suma de los dígitos de " + numeroIncial + " es: " + suma;
}

boton3.addEventListener("click", calcularSumaDigitos);

// Practica 4

const obtenerNumeroAleatorioEnRango = () => {
  let exito = false;
  while (!exito) {
    let rangoMin = prompt("Ingrese el valor mínimo del rango:");

    if (rangoMin === null) {
      return;
    }

    rangoMin = parseInt(rangoMin);
    if (isNaN(rangoMin)) {
      alert(
        "Debe ingresar un número válido para el valor mínimo del rango. Inténtelo de nuevo."
      );
      continue;
    }

    let rangoMax = prompt("Ingrese el valor máximo del rango:");

    if (rangoMax === null) {
      return;
    }

    rangoMax = parseInt(rangoMax);
    if (isNaN(rangoMax)) {
      alert(
        "Debe ingresar un número válido para el valor máximo del rango. Inténtelo de nuevo."
      );
      continue;
    }

    if (rangoMin >= rangoMax) {
      alert(
        "El valor mínimo del rango debe ser menor que el valor máximo. Inténtelo de nuevo."
      );
      continue;
    }

    let numeroAleatorio =
      Math.floor(Math.random() * (rangoMax - rangoMin + 1)) + rangoMin;
    msg.innerHTML =
      "El número aleatorio dentro del rango " +
      rangoMin +
      " y " +
      rangoMax +
      " es: " +
      numeroAleatorio;
    exito = true;
  }
};

boton4.addEventListener("click", obtenerNumeroAleatorioEnRango);

// Practica 5
const generarSecuenciaFibonacci = (numeroMaximo) => {
  let secuencia = [0, 1];
  let sumaSecuencia = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];

  while (sumaSecuencia <= numeroMaximo) {
    secuencia.push(sumaSecuencia);
    sumaSecuencia = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
  }

  return secuencia.join(", ");
};

const obtenerSecuenciaFibonacci = () => {
  let exito = false;
  while (!exito) {
    let numeroMaximo = prompt(
      "Ingrese el número máximo para la secuencia Fibonacci:"
    );

    if (numeroMaximo === null) {
      return;
    }

    numeroMaximo = parseInt(numeroMaximo);
    if (isNaN(numeroMaximo)) {
      alert("Debe ingresar un número válido. Inténtelo de nuevo.");
      continue;
    }

    let secuenciaFibonacci = generarSecuenciaFibonacci(numeroMaximo);
    msg.innerHTML = 
      "La secuencia de Fibonacci hasta " +
        numeroMaximo +
        " es: " +
        secuenciaFibonacci
    ;
    exito = true;
  }
};

boton5.addEventListener("click", obtenerSecuenciaFibonacci);
