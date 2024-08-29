function scrollToContact() {
    document.getElementById('contact-me').scrollIntoView({
      behavior: 'smooth'
    });
}

function toggleMenu() {
  var navbarItems = document.getElementById("navbar-items");
  navbarItems.classList.toggle("active");
}

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down to main-2, show the button
window.onscroll = function() {
    const main2 = document.querySelector('.main-2');
    const main2Position = main2.getBoundingClientRect().top;

    if (window.scrollY >= main2Position) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
