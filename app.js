// Array para almacenar los nombres de los amigos
let nombresAmigos = [];

// Seleccionar elementos del DOM
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');


function agregarAmigo() {
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    nombresAmigos.push(nombre);

    // Limpiar el campo de texto
    inputNombre.value = "";

    // Actualizar la lista de amigos en el DOM
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = "";

    // Crear un elemento li por cada nombre y agregarlo a la lista
    nombresAmigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega al menos un nombre.");
        return;
    }

    // Seleccionar un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const amigoSecreto = nombresAmigos[indiceAleatorio];

    // Mostrar el nombre del amigo secreto en la página
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}



