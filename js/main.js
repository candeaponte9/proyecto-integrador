const header = document.querySelector("header");

window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icono')
let navmenu = document.querySelector('.navmenu')

menu.onclick = () => {
    menu.classList.toggle('fa-x')
    navmenu.classList.toggle('open')
}


function guardarProducto() {
    var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var stock = document.getElementById('stock').value;
    var marca = document.getElementById('marca').value;
    var categoria = document.getElementById('categoria').value;
    var descripcionCorta = document.getElementById('descripcionCorta').value;
    var descripcionLarga = document.getElementById('descripcionLarga').value;
    var productoImportado = document.getElementById('productoImportado').checked;
    var productoNacional = document.getElementById('productoNacional').checked;
    var envioSinCargo = document.getElementById('envioSinCargo').checked;
    var fotografia = document.getElementById('fotografia').value; // Aquí deberías manejar el archivo de imagen

    var nombreRegex = /^[a-zA-Z\s]+$/;
    var precioRegex = /^\d+(\.\d{1,2})?$/;
    var stockRegex = /^\d+$/;
    var marcaCategoriaRegex = /^[a-zA-Z\s]+$/;
    var descripcionRegex = /^.{10,}$/; // Al menos 10 caracteres en la descripción

    if (!nombreRegex.test(nombre)) {
        mostrarToast("Nombre inválido");
        return;
    }

    if (!precioRegex.test(precio)) {
        mostrarToast("Precio inválido");
        return;
    }

    if (!stockRegex.test(stock)) {
        mostrarToast("Stock inválido");
        return;
    }

    if (!marcaCategoriaRegex.test(marca)) {
        mostrarToast("Marca inválida");
        return;
    }

    if (!marcaCategoriaRegex.test(categoria)) {
        mostrarToast("Categoría inválida");
        return;
    }

    if (!descripcionRegex.test(descripcionCorta)) {
        mostrarToast("Descripción corta debe tener al menos 10 caracteres");
        return;
    }

    if (!descripcionRegex.test(descripcionLarga)) {
        mostrarToast("Descripción larga debe tener al menos 10 caracteres");
        return;
    }

    // Validar el campo de imagen (fotografía)
    var fotografiaInput = document.getElementById('fotografia');
    if (!validarFormatoImagen(fotografiaInput)) {
        mostrarToast("Formato de imagen no válido. Use formatos como JPG, JPEG, PNG, etc.");
        return;
    }

    // Agrega más validaciones según sea necesario

    mostrarToast("Producto guardado exitosamente", true);
}

function mostrarToast(mensaje, esExito = false) {
    var toast = document.createElement('div');
    toast.className = 'toast ' + (esExito ? 'toast-success' : 'toast-error');
    toast.innerHTML = mensaje;

    document.body.appendChild(toast);

    setTimeout(function () {
        document.body.removeChild(toast);
    }, 3000);
}

function validarFormatoImagen(input) {
    var allowedFormats = ['jpg', 'jpeg', 'png', 'gif'];
    var filePath = input.value.toLowerCase();
    var extension = filePath.substring(filePath.lastIndexOf('.') + 1);

    return allowedFormats.indexOf(extension) !== -1;
}