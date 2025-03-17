const amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    console.log("Vamos a agregar un amigo");
    const input = document.getElementById("amigo");
    const nombre = input.value.trim().toUpperCase();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Debes ingresar el nombre de un amigo");
        return; 
    } 

    if (amigos.includes(nombre)) {
        alert("El amigo que quieres ingresar ya se encuentra registrado");
        input.value =""
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Crear y agregar un nuevo elemento a la lista
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el input después de agregar
    input.value = "";
}

    // Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de sortear.");
        return;
    }

    // Escoger un nombre al azar
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigoSecreto)

    // Limpiar la pantalla
    document.getElementById("listaAmigos").innerHTML = "";
    amigos.length=0;

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class='resultado-item'>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
