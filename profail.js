let menu=document.getElementById('menu');
let navbar=document.querySelector('.navbar');
let x=document.getElementById('WEL');


menu.addEventListener('click',function(){
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

})






ScrollReveal({
    
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200

});


ScrollReveal().reveal('.home-contact, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicse-container,.PROFAIL-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });




x.addEventListener('click',function(){
    x.innerText="ajkcjka";
});