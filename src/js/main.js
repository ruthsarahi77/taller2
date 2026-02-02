import '../css/style.css';
import 'flowbite';


const actualizarContador = () => {
  const contador = document.getElementById("carrito-contador");
  const carrito = JSON.parse(localStorage.getItem("carrito-cursos")) || [];
  if (contador) contador.innerText = carrito.length;
};


document.addEventListener("DOMContentLoaded", actualizarContador);
const navbar = document.querySelector('nav');

const scrollNavBar = () =>{
    if (window.scrollY >0){        
        navbar.classList.add(
            'shadow-xl',            
            'bg-red-800',          
            'backdrop-blur',        
            'transition-all',       
            'duration-300'
        );
    }else{
        
        navbar.classList.remove(
            'shadow-lg',
            'bg-red-800',
            'backdrop-blur'
        );
    }
};



window.addEventListener('scroll',scrollNavBar);
scrollNavBar();
const clienteCards = document.querySelectorAll('.cliente-card');
clienteCards.forEach(card => {
    card.classList.add(
        'opacity-0',        
        'translate-y-8',    
        'transition-all',   
        'duration-700'
    );
});

const observerClientes = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.classList.remove(
                    'opacity-0',
                    'translate-y-8'
                );
                entry.target.classList.add(
                    'opacity-100',
                    'translate-y-0'
                );
                observerClientes.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

clienteCards.forEach(card =>{
    observerClientes.observe(card);
});