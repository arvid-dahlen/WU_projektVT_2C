

const Slide = ()=>{
    const burger = document.querySelector('.burger');
    const nav    = document.querySelector('.meny');
    const navLinks = document.querySelectorAll('.list-item-div')
    const click = document.querySelector('.header')

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');   
        
    burger.classList.toggle('toggle');


    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else { link.style.animation = `Fade 0.5s ease forwards ${index / 10 + 0.35}s`;
    }  
        
    });
        
        });
    }

const Share = ()=>{
    const shareButton = document.querySelector('.center-box');
    
    shareButton.addEventListener('click',() => {
        shareButton.classList.toggle('center-box-active');
    });
}

function changeIcon(x) {
    x.classList.toggle("fa-instagram");
}

Share();
Slide();    

    
