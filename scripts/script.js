document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.sidebar .close-btn');
  
    hamburger.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  
    closeBtn.addEventListener('click', function() {
      sidebar.classList.remove('active');
    });
});
