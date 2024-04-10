const mobileToggle = document.querySelector(".mobile-nav-toggle")
const menuVisible = document.querySelector(".mobile-nav")
const headerColor = document.querySelector('header')

mobileToggle.addEventListener('click', function () {

    menuVisible.classList.toggle("visible");
    mobileToggle.classList.toggle("rotate");

    document.body.classList.toggle('no-scroll');

})

document.addEventListener('DOMContentLoaded', function() {
    const portataButtons = document.querySelectorAll('.portata-button');
    const portate = document.querySelectorAll('.portate');
  
    portataButtons.forEach(button => {
      button.addEventListener('click', function() {
        event.preventDefault();
        const portataToShow = this.getAttribute('data-portata');
  
        // Nascondi tutte le portate
        portate.forEach(portate => {
          portate.style.display = 'none';
        });
  
        // Mostra solo la portata corrispondente al bottone cliccato
        document.querySelector(`.portate.${portataToShow}`).style.display = 'flex';

        document.querySelector(`#${portataToShow}`).scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
