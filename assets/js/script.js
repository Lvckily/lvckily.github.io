document.addEventListener('DOMContentLoaded', function(){
    const menuHamburger = document.querySelector('.menu');
    const navList = document.querySelector('.nav-list');

    menuHamburger.addEventListener('click', function(){
        navList.classList.toggle('show');
    });

    const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(function(link){
    link.addEventListener('click', function(){
        navList.classList.remove('show');
    });
});

const backLinks = document.querySelectorAll('.back-menu i');
backLinks.forEach(function(link){
    link.addEventListener('click', function(){
        navList.classList.remove('show');
    });
});
});

function highlightLink(element){

    if(!element.querySelector('.navbar .icon')){

    var links = document.querySelectorAll ('.nav-list a');
    links.forEach(function(link){
        link.classList.remove('active');
    });
element.classList.add('active');
    };
};

