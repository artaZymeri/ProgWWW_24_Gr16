// Get modal element and buttons
const modal = document.getElementById('registration-modal');
const joinBtn = document.getElementById('join-btn');
const closeModalBtn = document.getElementById('close-modal');

// Open the modal when the Join Now button is clicked
joinBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// Get modal element and buttons for Get Started form
const getStartedModal = document.getElementById('get-started-modal');
const getStartedBtn = document.getElementById('get-started-btn');  // Ensure this button exists in your HTML
const closeGetStartedModalBtn = document.getElementById('close-get-started-modal');

// Open the Get Started modal when the button is clicked
getStartedBtn.addEventListener('click', function() {
    getStartedModal.style.display = 'block';  // Show the modal
});

// Close the Get Started modal when the close button is clicked
closeGetStartedModalBtn.addEventListener('click', function() {
    getStartedModal.style.display = 'none';  // Hide the modal
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === getStartedModal) {
        getStartedModal.style.display = 'none';  // Hide the modal
    }
});
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".about__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".service__card", {
    duration: 1000,
    interval: 500,
  });
  
  ScrollReveal().reveal(".facility__content .section__header", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".facility__content p", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".mentor__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".banner__content h2", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".banner__content p", {
    ...scrollRevealOption,
    delay: 500,
  });