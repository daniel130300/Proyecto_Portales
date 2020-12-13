document.addEventListener("DOMContentLoaded", function(e)
{
    
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const close_btn = document.getElementsByClassName('close-btn')[0];
  const navbarLinks = document.getElementsByClassName('navbar-links')[0];
  const products_content = document.getElementsByClassName('products-content')[0];
  const services_content = document.getElementsByClassName('services-content')[0];
  const products_btn = document.getElementsByClassName('products-btn')[0];
  const services_btn = document.getElementsByClassName('services-btn')[0];

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  })

  close_btn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  })

  products_btn.addEventListener('click', () => {
    products_content.classList.toggle('active');
  })

  services_btn.addEventListener('click', () => {
    services_content.classList.toggle('active');
  })

});



