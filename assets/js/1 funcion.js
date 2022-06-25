// Declaración de Función

//function example(a, b, c){
//     return a+b+c
// }


// Función de Expresión

const example = function (num1, num2, num3){

    return num1 + num2 + num3
    
}

//Adicional

let sumaTresNumeros = document.getElementById("sumarTresNum");

sumaTresNumeros.addEventListener("click", function (){

    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let num3 = document.querySelector("#num3").value;
    let totalSuma = Number(num1) + Number(num2)+ Number(num3) ;

    if (num1 == "" || num2 == "" || num3 == ""){
        alert("Debe ingresar un numero");
    }else if (num1 <= 0 || num2 <= 0 || num3 <= 0 ){
        alert("Debe ingresar un valor positivo");
    }else{
        document.querySelector("#labSumaTresNum").innerText = "La suma de los numeros es: " + totalSuma;
    }
    
})
  