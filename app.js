// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];//array para almacenar nombres
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    //Bucle for para recorrer el array amigos y crear un <li> por cada nombre
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();//trim para eliminar espacios en blanco al inicio y final
    //si el usuario no ingresa nombre mostrará alerta
    if (nombre === "") {
        alert("Por favor, ingrese un nombre");
        return;
    }
    if (amigos.includes(nombre)){
        alert("Este nombre ya ha sido agregado");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");//si el array está vacío mostrará mensaje
        return;
    }    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}
function nuevalista() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = ""; // Borrar el amigo sorteado
}