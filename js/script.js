

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
    const shareButton1 = document.querySelector('.b1');
    const shareButton2 = document.querySelector('.b2');
    const shareButton3 = document.querySelector('.b3');
    const shareButton4 = document.querySelector('.b4');
    const shareButton6 = document.querySelector('.b6');
    const shareButton7 = document.querySelector('.b7');
    const shareButton8 = document.querySelector('.b8');
    const shareButton9 = document.querySelector('.b9');

    shareButton.addEventListener('click',() => {
        shareButton.classList.toggle('center-box-active');
        shareButton1.classList.toggle('box-active');
        shareButton2.classList.toggle('box-active');
        shareButton3.classList.toggle('box-active');
        shareButton4.classList.toggle('box-active');
        shareButton6.classList.toggle('box-active');
        shareButton7.classList.toggle('box-active');
        shareButton8.classList.toggle('box-active');
        shareButton9.classList.toggle('box-active');
    });
        
    }

const changeIcon = ()=>{ 
    const shareButton = document.querySelector('.center-box');

    shareButton.addEventListener('click',() => {
         if(document.querySelector("#icon").className == 'fa fa-share-alt'){
            document.querySelector("#icon").className = "fa fa-times";

        }else{   
            document.querySelector("#icon").className = "fa fa-share-alt";
        }
    });

}

changeIcon();
Share();
Slide();    

    
