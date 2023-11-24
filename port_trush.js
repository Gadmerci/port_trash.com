//typing animation 

var typed = new Typed(".typing", {
    strings: ["Web developer", "Programmer", "Backend", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
 
// menu display in small screen

document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
});