const titulo = document.querySelector('h1');
titulo.onclick = function() {
    titulo.style.backgroundColor = "red";
    alert("Tocaste el titulo!");
};
