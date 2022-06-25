// Función

// suma = function(a, b){
//     return a + b
//     }


// Arrow Function

const suma = (num1, num2) => num1+num2;

// alert(suma(11,3))

//Adicional

let sumaDosNumeros = document.getElementById("sumarDosNum");

sumaDosNumeros.addEventListener("click", function (){

    let numero1 = document.querySelector("#numero1").value;
    let numero2 = document.querySelector("#numero2").value;
    let totalSuma = Number(numero1) + Number(numero2) ;

    if (numero1 == "" || numero2 == ""){
        alert("Debe ingresar un numero");
    }else if (numero1 <= 0 || numero2 <= 0 ){
        alert("Debe ingresar un valor positivo");
    }else{
        document.querySelector("#labSumaDosNum").innerText = "La suma de los numeros es: " + totalSuma;
    }
    
})