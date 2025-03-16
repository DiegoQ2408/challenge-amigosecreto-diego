// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregandoAmigos() {
    const inputAmigo = document.getElementById("amigo");
    const nombreDelAmigo = inputAmigo.value.trim();

    if (nombreDelAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    amigos.push(nombreDelAmigo);

    actualizaListaA();

    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizaListaA() {
    const listaDeAmigos = document.getElementById("listaDeAmigos");
    listaDeAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaDeAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agregue primero un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoDeAmigos = document.getElementById("resultado");
    resultadoDeAmigos.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("botonAdicionar").addEventListener("click", agregandoAmigos);
    document.getElementById("botonSortear").addEventListener("click", sortearAmigo);
});
