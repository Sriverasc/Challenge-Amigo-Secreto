// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombres = []; // Array para almacenar los nombres de los amigos
const li = document.getElementById("listaAmigos"); // Se obtiene el elemento de la lista donde se agregarán los nombres
const nombreFormatoHTML =
`<ul class="name-item" role="listitem">
    <div class="name-text">
        nombre-placeholder
    </div>
    <div class="button-remove" onclick="eliminarAmigo(this)">
        <i class="material-icons">do_not_disturb_on</i>
    </div>
</ul>`; // Plantilla HTML para cada nombre

const validarNombre = (nombre) => {
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/; // Permite letras, acentos y espacios
    
    // Se valida que el nombre no esté vacío
    if (!nombre) {
        alert("El nombre no puede estar vacío");
        return false;
    }

    // Se valida que el nombre solo tenga letras y espacios
    if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios");
        return false;
    }

    // Se valida que el nombre no este repetido
    if (nombres.includes(nombre)) {
        alert("El nombre ya existe");
        return false;
    }
    return true;
}

const agregarAmigo = () => {
    const nombreInput = document.getElementById("amigo").value.trim(); // Se obtiene el valor del input y se elimina espacios al inicio y al final

    if (validarNombre(nombreInput)) { // Se valida el nombre
        nombres.push(nombreInput); // Se agrega el nombre al array
        const nombreHTML = nombreFormatoHTML.replace("nombre-placeholder", nombreInput); // Se reemplaza el placeholder por el nombre ingresado
        li.innerHTML += nombreHTML; // Se agrega el nombre al HTML
        document.getElementById("amigo").value = ""; // Se limpia el input
    }
}

const eliminarAmigo = (element) => {
    const nombre = element.parentElement.querySelector(".name-text").textContent;
    nombres.splice(nombres.indexOf(nombre), 1);
    element.parentElement.remove();
}

const sortearAmigo = () => {
    const numeroAmigos = nombres.length; // Se obtiene el número de amigos
    let amigoSorteado;

    if (numeroAmigos < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo");
        return;
    }
    
    amigoSorteado = nombres[Math.floor(Math.random() * numeroAmigos)]; // Se selecciona un amigo al azar

    document.getElementById("resultado").textContent = `El amigo sorteado es: ${amigoSorteado}`; // Se muestra el resultado del sorteo
}