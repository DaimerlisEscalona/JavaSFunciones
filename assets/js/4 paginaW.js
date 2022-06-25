let selectColor;
let aNaranja = document.getElementById('aColorNaranja');
let sAzul = document.getElementById('sColorAzul');
let dRojo = document.getElementById('dColorRojo');
let verde = document.getElementById('colorVerde');



document.addEventListener('keydown', function (event) {
    
    if (event.key === 'a' || event.key === 'A') {
        selectColor = 'rgba(255, 166, 0, 0.788)';
    } else if (event.key === 's' || event.key === 'S') {
        selectColor = 'rgb(55, 55, 185)';
    } else if (event.key == 'd' || event.key === 'D') {
        selectColor = 'rgb(250, 59, 59)';
    } else{
        selectColor = 'rgb(104, 233, 104)';
    }
})

aNaranja.addEventListener("click", function(){
   
    aNaranja.style.backgroundColor = selectColor;

})

sAzul.addEventListener("click", function(){
   
    sAzul.style.backgroundColor = selectColor;

})


dRojo.addEventListener("click", function(){
   
    dRojo.style.backgroundColor = selectColor;

})


verde.addEventListener("click", function(){
   
    verde.style.backgroundColor = selectColor;

})