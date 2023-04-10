//OBTENEMOS VARIABLES
let inputEntrada = document.querySelector("#numEntrada");
let resultado = document.querySelector("#resultadoFinal");
let opcionConvertir = document.querySelector("#opcionConvertir");
let title = document.querySelector("#title");

let btnCalcular = document.querySelector("#btn-calcular");
let btnLimpiar = document.querySelector("#btn-limpiar");

//FUNCIONES
function limpiarCampos() {
  inputEntrada.value = "";
  resultado.value = "";
  inputEntrada.focus();
  //opcionConvertir.value="Decimal - Binario"
}

function convertirDecimalBinario(numEntrada) {
  let resultadoCadena = "";
  while (numEntrada != 0) {
    let binario = Math.floor(numEntrada / 2);
    let residuo = numEntrada % 2;

    numEntrada = binario;

    resultadoCadena = residuo + resultadoCadena;
  }
  return resultadoCadena;
}

function convertirBinarioDecinal(numEntrada) {
  let array = numEntrada.split("");
  let decimal = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    decimal += array[i] * Math.pow(2, array.length - i - 1);
  }

  return decimal;
}

function updateVal(e) {
  title.textContent = e.target.value;
  limpiarCampos();
}

//EVENTOS
opcionConvertir.addEventListener("change", updateVal);

btnLimpiar.addEventListener("click", () => {
  limpiarCampos();
});

btnCalcular.addEventListener("click", () => {
  if (inputEntrada.value == "") {
    alert("Colocar un número ya sea en Decimal o Binario");
  } else {
    switch (opcionConvertir.value) {
      case "Decimal - Binario":
        resultado.value = convertirDecimalBinario(inputEntrada.value);
        break;
      case "Binario - Decimal":
        resultado.value = convertirBinarioDecinal(inputEntrada.value);
        break;
      default:
        alert("No existe esta opcion");
    }
  }
});
