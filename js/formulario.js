var botonAdicionar = document.querySelector("#adicionar-usuario");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar"); 
    var user = capturarDatosUsuario(form);
    var usuarioTr = construirTr(user);

    var errores = validarCampo(user);

    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return;
    }
 
    var tabla = document.querySelector("#tabla-usuarios");
    tabla.appendChild(usuarioTr);
    form.reset();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
});

function capturarDatosUsuario(form){
    //capturando los datos del formulario
    var user = {
        usuario: form.usuario.value,
        correo: form.correo.value,
        mensaje: form.mensaje.value,
    }
    return user; 
}

function construirTr(user){ 
       var usuarioTr = document.createElement("tr");     
          
       usuarioTr.appendChild(construirTd(user.usuario, "info-usuario"));
       usuarioTr.appendChild(construirTd(user.correo,"info-correo"));
       usuarioTr.appendChild(construirTd(user.mensaje,"info-mensaje"));

       return usuarioTr; 
}

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarCampo(user){
    var errores = []

    if(user.usuario.length == 0){
        errores.push("Por favor, ingrese el usuario");
    }
    if(user.correo.length == 0){
        errores.push("Por favor, ingrese el email");
    }
    if(user.mensaje.length == 0){
        errores.push("Por favor, ingrese un comentario");
    }
    return errores; 
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

