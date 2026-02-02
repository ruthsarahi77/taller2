import '../css/style.css';
import 'flowbite';

const lista = document.getElementById("lista-carrito");
const totalPago = document.getElementById("total-compra");
const limpiar = document.getElementById("btn-limpiar");

//traer la información de la memoria del localStorage
let cursosCarrito = JSON.parse(localStorage.getItem("carrito-cursos")) || [];

//Función para actualizar el carrito
const actualizarContador = () => {
    const contador = document.getElementById("carrito-contador");
    if (contador)
        contador.innerText = cursosCarrito.length;

}

const mostrarCarrito = () => {
    lista.innerHTML = "";
    let total = 0;

    cursosCarrito.forEach((curso, index) => {
        total += parseFloat(curso.precio);

        //De acuerdo al JSON 
        lista.innerHTML += `
  <div class="flex flex-col sm:flex-row gap-4 bg-gray-100 border border-gray-200 rounded-xl p-4 shadow-sm">

    <img
      src="${curso.imagen}"
      alt="${curso.titulo}"
      class="w-full sm:w-32 h-32 object-cover rounded-lg">

    <div class="flex-1">
      <h3 class="font-bold text-gray-800 text-lg">
        ${curso.titulo}
      </h3>

      <div class="flex items-center justify-between mt-2">
        <span class="text-red-600 font-bold text-lg">
          $${curso.precio}
        </span>

        <button
          data-index="${index}"
          class="btn-eliminar text-sm text-red-600 hover:underline">
          Eliminar
        </button>
      </div>
    </div>

  </div>
`;

    });
    totalPago.innerText = `$${total.toFixed(2)}`;
    actualizarContador();
};

if (lista) {
    lista.addEventListener("click", (e) => {
        const boton = e.target.closest(".btn-eliminar");
        if (boton) {
            const index = parseInt(boton.dataset.index);
            cursosCarrito.splice(index, 1);
            localStorage.setItem("carrito-cursos", JSON.stringify(cursosCarrito));
            mostrarCarrito();
        }
    });
}

if (limpiar) {
    limpiar.addEventListener("click", () => {
        cursosCarrito = [];
        localStorage.setItem("carrito-cursos", JSON.stringify(cursosCarrito));
        mostrarCarrito();
    });
}

mostrarCarrito();
