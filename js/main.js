let menuIcon = document.querySelector('#menu-icon');
            let navbar = document.querySelector('.navbar');

            menuIcon.onclick = () => {
                menuIcon.classList.toggle('bx-x');
                navbar.classList.toggle('active');
            };

ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 2000, 
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});