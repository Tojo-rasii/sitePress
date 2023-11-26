document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    const currentPage = window.location.href;
  
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
  
    // Iterate through each link and check if it matches the current page URL
    navLinks.forEach(link => {
      if (currentPage.includes(link.getAttribute('href'))) {
        link.classList.add('active');
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    const currentPage = window.location.href;
  
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
  
    // Iterate through each link and check if it matches the current page URL
    navLinks.forEach(link => {
      if (currentPage.includes(link.getAttribute('href'))) {
        link.classList.add('active');
      }
    });
  });
  