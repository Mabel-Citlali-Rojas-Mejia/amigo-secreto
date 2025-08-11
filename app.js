let amigos = []; 

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        // Actualizar el array de amigos
        amigos.push(nombre);

        // Limpiar el campo de entrada
        limpiarCaja();

        // Mostrar la lista actualizada
        mostrarLista(); 
    }
}

// Función para limpiar el campo de texto
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

// Función para mostrar la lista de amigos 
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombre = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    let li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${nombre}`;
    resultado.appendChild(li);
}

