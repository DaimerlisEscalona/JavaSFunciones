// addEventListener

// function pintar() {
//     ele = document.getElementById("ele1")
//     ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);



let ele = document.getElementById("ele1")


function pintar(color) {
    
    
    ele.style.backgroundColor = color;

}
    ele.addEventListener("click", function(){
    pintar('yellow')
});
