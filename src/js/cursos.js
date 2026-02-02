import '../css/style.css';
import 'flowbite';

let cursosCarrito = JSON.parse(localStorage.getItem("carrito-cursos")) || [];

const actualizarContador = () => {
    const contador = document.getElementById("carrito-contador");
    const carrito = JSON.parse(localStorage.getItem("carrito-cursos")) || [];
    if (contador) contador.innerText = carrito.length;
};


document.addEventListener("DOMContentLoaded", actualizarContador);

const navbar = document.querySelector('nav');

const scrollNavBar = () => {
    if (window.scrollY > 5) {        
        navbar.classList.add(
            'shadow-xl',           
            'bg-red-800',          
            'backdrop-blur',        
            'transition-all',       
            'duration-300'
        );
    } else {
        navbar.classList.remove(
            'shadow-lg',
            'bg-red-800',
            'backdrop-blur'
        );
    }
};


window.addEventListener('scroll', scrollNavBar);
scrollNavBar();

const contenedor = document.getElementById("contenedor-cursos");

// Función asincrónica para cargar los cursos
const cargarCursos = async () => {
    try {
        const respuesta = await fetch("/data/cursos.json");

        // Verificamos si la respuesta fue correcta
        if (!respuesta.ok) throw new Error("Error al cargar los datos");

        // Convertimos la respuesta a JSON
        const datos = await respuesta.json();

        // Limpiamos el contenedor
        contenedor.innerHTML = "";

        // Recorremos los cursos
        datos.forEach((curso) => {
            contenedor.innerHTML += `
                <div class="p-4 border rounded-lg hover:border-red-500 hover:scale-110 transition-transform duration-300 group bg-gray-800 shadow-xl">
                    <div class=" relative overflow-hidden rounded-lg h-auto mb-4 bg-red-700">
                        <img class="object-contain w-full h-full" 
                             src="${curso.imagen}" alt="${curso.titulo}">
                    </div>

                    <div class="flex flex-col justify-between">
                        <div>
                            <h1 class="font-bold text-white uppercase text-sm line-clamp-1 mb-1">${curso.titulo}</h1>
                            <span class="text-[16px] bg-red-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                                ${curso.precio}
                            </span>
                        </div>
                        
                        <div class="flex items-center justify-between mt-6">
                            <button 
                            data-titulo="${curso.titulo}" 
                            data-precio="${curso.precio}"
                            data-imagen="${curso.imagen}"
                              class="btn-agregar bg-red-600 text-white hover:bg-gray-50 hover:text-red-600 p-2 rounded-lg transition-all active:scale-95">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error("Error:", error);
        contenedor.innerHTML = `
            <p class="text-red-600 text-center col-span-full font-bold">
                Error al cargar los cursos. Intente nuevamente.
            </p>
        `;
    }
};

// Ejecutamos la función
cargarCursos();

document.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn-agregar");
    if (!boton) return;

    const carrito = JSON.parse(localStorage.getItem("carrito-cursos")) || [];

    carrito.push({
        titulo: boton.dataset.titulo,
        precio: boton.dataset.precio,
        imagen: boton.dataset.imagen
    });

    localStorage.setItem("carrito-cursos", JSON.stringify(carrito));
    actualizarContador();
});


