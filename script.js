const titulo = document.querySelector('h1');
titulo.onclick = function() {
    titulo.style.backgroundColor = "red";
    alert("Tocaste el titulo!");
};

let modoOscuro = false;
const boton = document.getElementById('botonAccion');
function saludar() {
if (modoOscuro === false) {
    document.body.style.backgroundColor = "#2c3e50";
    titulo.style.color = "white"
    boton.innerText = "Modo claro"
    modoOscuro = true;
} else {
    document.body.style.backgroundColor = "rgb(224, 224, 224)";
    titulo.style.color = "black"
    boton.innerText = "Modo oscuro"
    modoOscuro = false
}
}

boton.onclick = saludar;