document.getElementById('FormularioContacto').addEventListener('submit', function(event) {
    let isValid = true;

    //agarro los campos
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');

    //regex para caracteres validos
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    //valido el campo 'nombre'
    if (!regex.test(nombre.value.trim())) {
        isValid = false;
        mostrarError('nombre', 'El nombre solo puede contener letras y espacios.');
    } else {
        ocultarError('nombre');
    }

    if (!isValid) {//si no es valido, no se envia
        event.preventDefault();
    }
    else{
        event.preventDefault();
        mostrarConfirmacion();
    }
});


function mostrarError(campo, mensaje) {//show mensaje de error
    const errorElement = document.getElementById(campo + '-error');

    if (errorElement){
        errorElement.textContent = mensaje;
        //para el lector de pantalla
        statusMessage.textContent = `Error en el campo ${campo}: ${mensaje}`;
        //muestro el mensaje de error visualmente
        errorElement.style.display = 'block';
    }
}
function ocultarError(campo) {//hide mensaje de error
    const errorElement = document.getElementById(campo + '-error');
    errorElement.style.display = 'none';
}

function mostrarConfirmacion(){//mensaje confirmando el envio del formulario
    //para el lector de pantalla
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = 'El formulario se envió correctamente.';
    
    //muestro visualmente la confirmacion
    const confirmacion = document.createElement('div');
    confirmacion.className = 'confirmacion';
    confirmacion.textContent = 'El formulario se envió correctamente.';
    document.body.appendChild(confirmacion);
    
    setTimeout(function(){//elimino el mensaje de confirmacion a los 3seg
        confirmacion.remove();
    }, 3000);
};