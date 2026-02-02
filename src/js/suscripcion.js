import '../css/style.css';
import 'flowbite';

const nombre = document.getElementById("username");
const company = document.getElementById("company");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const formulario = document.getElementById("formulario")



const patrones = {
    usuario: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    clave: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
}


const mostrarError = (input, idError) => {
    const mensaje = document.getElementById(idError);

    
    if (mensaje) mensaje.classList.remove("hidden"); 
    input.classList.add("border-red-500");
    input.classList.remove("border-slate-700");
}


const eliminarError = (input, idError) => {
    const mensaje = document.getElementById(idError);
    if (mensaje) mensaje.classList.add("hidden");
    input.classList.remove("border-red-500");
    input.classList.add("border-green-500");
}


formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let formularioValido = true;

    
    if (!patrones.usuario.test(nombre.value)) { 
        mostrarError(nombre, "error-username");
        formularioValido = false;
    } else {
        eliminarError(nombre, "error-username");
    }
  
    if (!patrones.usuario.test(company.value)) { 
        mostrarError(company, "error-company");
        formularioValido = false;
    } else {
        eliminarError(company, "error-company");
    }

    
    if (!patrones.correo.test(email.value)) { 
        mostrarError(email, "error-email");
        formularioValido = false;
    } else {
        eliminarError(email, "error-email");
    }

    
    if (!patrones.clave.test(password.value)) { 
        mostrarError(password, "error-password");
        formularioValido = false;
    } else {
        eliminarError(password, "error-password");
    }

    
    if (password.value !== confirmPassword.value || confirmPassword.value === "") {
        mostrarError(confirmPassword, "error-confirmPassword");
        formularioValido = false;
    } else {
        eliminarError(confirmPassword, "error-confirmPassword");
    }

    
    if(formularioValido){
        alert("¡Registro exitoso! :)");
        
        formulario.reset();
    }
})
