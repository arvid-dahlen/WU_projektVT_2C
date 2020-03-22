

const Slide = ()=>{
    const burger = document.querySelector('.burger');
    const nav    = document.querySelector('.meny');
    const navLinks = document.querySelectorAll('.list-item-div')
    const click = document.querySelector('.header')
    const diamondGrid = document.querySelector('.diamond-grid')
    const shareButtons = document.querySelector('.wrapper')

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');   
        burger.classList.toggle('toggle');
        shareButtons.classList.toggle('wrapper-active')
        if (diamondGrid != null){
        diamondGrid.classList.toggle('diamond-grid-active');}
        
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


$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut(); 
        $('.login-info-box').fadeIn();
        
        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');
        
    }
    else if($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();
        
        $('.white-panel').removeClass('right-log');
        
        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});

function test_str() { 

    var str = 
        document.getElementById("password_check").value; 
    if (str.match(/[a-z]/g) && str.length >= 1) 
        document.querySelector("#user_logo").className = "fa fa-sign-out";
        document.querySelector("#user_logo_index").addClass('fa fa-sign-out');
        $('#user_logo_index').removeClass('fa fa-user');
} 





    
const header = document.querySelector(".nav");
const sectionOne = document.querySelector(".img-sektion");

if (sectionOne != null){
    const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
    ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
        } else {
        header.classList.remove("nav-scrolled");
        }
    });
    },
    sectionOneOptions);

    sectionOneObserver.observe(sectionOne);
}


const wrapper = document.querySelector(".wrapper");
const sectionTwo = document.querySelector(".footer");
const shareButton = document.querySelector('.center-box');
const shareButton1 = document.querySelector('.b1');
const shareButton2 = document.querySelector('.b2');
const shareButton3 = document.querySelector('.b3');
const shareButton4 = document.querySelector('.b4');
const shareButton6 = document.querySelector('.b6');
const shareButton7 = document.querySelector('.b7');
const shareButton8 = document.querySelector('.b8');
const shareButton9 = document.querySelector('.b9');

const sectionTwoOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionTwoObserver = new IntersectionObserver(function(
  entries,
  sectionTwoObserver
) {
  entries.forEach(entry => {
  
    if (entry.isIntersecting) {
      wrapper.classList.add("fix-buttons");  
      shareButton.classList.add('center-box-active');
        shareButton1.classList.add('box-active');
        shareButton2.classList.add('box-active');
        shareButton3.classList.add('box-active');
        shareButton4.classList.add('box-active');
        shareButton6.classList.add('box-active');
        shareButton7.classList.add('box-active');
        shareButton8.classList.add('box-active');
        shareButton9.classList.add('box-active');
        if(document.querySelector("#icon").className == 'fa fa-share-alt'){
            document.querySelector("#icon").className = "fa fa-times";
        }
        else{   
            document.querySelector("#icon").className = "fa fa-times";
        }

    } 
    else {
        wrapper.classList.remove("fix-buttons");
        shareButton.classList.remove('center-box-active');
        shareButton1.classList.remove('box-active');
        shareButton2.classList.remove('box-active');
        shareButton3.classList.remove('box-active');
        shareButton4.classList.remove('box-active');
        shareButton6.classList.remove('box-active');
        shareButton7.classList.remove('box-active');
        shareButton8.classList.remove('box-active');
        shareButton9.classList.remove('box-active');  
        document.querySelector("#icon").className = "fa fa-share-alt";
    
        
    }
    
    
  });
},
sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);


    
const showBack = ()=>{
    document.querySelector('.more').addEventListener('click',() =>{
        document.querySelector('.back').classList.toggle('back-active');
        document.querySelector('.front').classList.toggle('front-notActive');
    });
}
showBack(); 

const showFront = ()=>{
    document.querySelector('.go-back').addEventListener('click',() =>{
        document.querySelector('.back').classList.toggle('back-active');
        document.querySelector('.front').classList.toggle('front-notActive');
    });
}
showFront(); 





const showBack2 = ()=>{
    document.querySelector('.more2').addEventListener('click',() =>{
        document.querySelector('.back2').classList.toggle('back-active');
        document.querySelector('.front2').classList.toggle('front-notActive');
    });
}
showBack2(); 

const showFront2 = ()=>{
    document.querySelector('.go-back2').addEventListener('click',() =>{
        document.querySelector('.back2').classList.toggle('back-active');
        document.querySelector('.front2').classList.toggle('front-notActive');
    });
}
showFront2(); 




const showBack3 = ()=>{
    document.querySelector('.more3').addEventListener('click',() =>{
        document.querySelector('.back3').classList.toggle('back-active');
        document.querySelector('.front3').classList.toggle('front-notActive');
    });
}
showBack3(); 

const showFront3 = ()=>{
    document.querySelector('.go-back3').addEventListener('click',() =>{
        document.querySelector('.back3').classList.toggle('back-active');
        document.querySelector('.front3').classList.toggle('front-notActive');
    });
}
showFront3(); 



const showBack4 = ()=>{
    document.querySelector('.more4').addEventListener('click',() =>{
        document.querySelector('.back4').classList.toggle('back-active');
        document.querySelector('.front4').classList.toggle('front-notActive');
    });
}
showBack4(); 

const showFront4 = ()=>{
    document.querySelector('.go-back4').addEventListener('click',() =>{
        document.querySelector('.back4').classList.toggle('back-active');
        document.querySelector('.front4').classList.toggle('front-notActive');
    });
}
showFront4(); 




const showBack5 = ()=>{
    document.querySelector('.more5').addEventListener('click',() =>{
        document.querySelector('.back5').classList.toggle('back-active');
        document.querySelector('.front5').classList.toggle('front-notActive');
    });
}
showBack5(); 

const showFront5 = ()=>{
    document.querySelector('.go-back5').addEventListener('click',() =>{
        document.querySelector('.back5').classList.toggle('back-active');
        document.querySelector('.front5').classList.toggle('front-notActive');
    });
}
showFront5(); 



const showBack6 = ()=>{
    document.querySelector('.more6').addEventListener('click',() =>{
        document.querySelector('.back6').classList.toggle('back-active');
        document.querySelector('.front6').classList.toggle('front-notActive');
    });
}
showBack6(); 

const showFront6 = ()=>{
    document.querySelector('.go-back6').addEventListener('click',() =>{
        document.querySelector('.back6').classList.toggle('back-active');
        document.querySelector('.front6').classList.toggle('front-notActive');
    });
}
showFront6(); 




const showBack7 = ()=>{
    document.querySelector('.more7').addEventListener('click',() =>{
        document.querySelector('.back7').classList.toggle('back-active');
        document.querySelector('.front7').classList.toggle('front-notActive');
    });
}
showBack7(); 

const showFront7 = ()=>{
    document.querySelector('.go-back7').addEventListener('click',() =>{
        document.querySelector('.back7').classList.toggle('back-active');
        document.querySelector('.front7').classList.toggle('front-notActive');
    });
}
showFront7(); 



const showBack8 = ()=>{
    document.querySelector('.more8').addEventListener('click',() =>{
        document.querySelector('.back8').classList.toggle('back-active');
        document.querySelector('.front8').classList.toggle('front-notActive');
    });
}
showBack8(); 

const showFront8 = ()=>{
    document.querySelector('.go-back8').addEventListener('click',() =>{
        document.querySelector('.back8').classList.toggle('back-active');
        document.querySelector('.front8').classList.toggle('front-notActive');
    });
}
showFront8(); 



