//OBTENEMOS VARIABLES
let inputEntrada=document.querySelector("#numEntrada")
let resultado=document.querySelector("#resultadoFinal")

let btnCalcular=document.querySelector("#btn-calcular")
let btnLimpiar=document.querySelector("#btn-limpiar")


//FUNCIONES
function limpiarCampos(){
    inputEntrada.value=""
    resultado.value=""
    inputEntrada.focus()
}

function convertirBinario(numEntrada){
    let resultadoCadena=""
    while(numEntrada!=0){
        let binario=Math.floor(numEntrada/2)
        let residuo=numEntrada%2

        numEntrada=binario

        resultadoCadena=residuo+resultadoCadena
    }
    return resultadoCadena
}

//EVENTOS
btnCalcular.addEventListener("click",()=>{
    resultado.value=convertirBinario(inputEntrada.value)
})

btnLimpiar.addEventListener("click",()=>{
    limpiarCampos()
})


