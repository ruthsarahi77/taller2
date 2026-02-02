import '../css/style.css';
import 'flowbite';

const navbar = document.querySelector('nav');

const scrollNavBar = () =>{
    if (window.scrollY >5){        
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