let hartje= document.getElementById('hartje');
let isOrange = false;
hartje.addEventListener("click",functie);
function functie() {
    
    if (isOrange) {
        hartje.style.color = "";
        isOrange = false;
    } else {
        hartje.style.color = "rgb(223, 199, 62)";
        isOrange = true;
}
}
