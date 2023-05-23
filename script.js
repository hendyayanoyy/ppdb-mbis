var burger = document.getElementById('burger');
var responsivemenu = document.getElementById('responsive-menu');

burger.addEventListener('click', function() {
    responsivemenu.classList.toggle('responsive-menu-active');
});