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
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

// const swiper = new Swiper(".swiper", {
//   loop: true,
// });
// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent the form from reloading the page

//   // Collecting form data
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const phone = document.getElementById("phone").value;
//   const file = document.getElementById("file").value;

//   // Display data in an alert
//   alert(`Registration Successful! Your profile will be added within 48hours \n\n Please review your details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nfile: ${file}`);
// });

function displayFormData(event) {
  event.preventDefault(); // Prevent form submission (for demo purposes)
  
  // Get the form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var category = document.getElementById('category').value;
  var socialLink = document.getElementById('social-link').value;
  var fileInput = document.getElementById('file');
  var fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file selected';

  // Display the data in an alert
  alert('Registration Successful! Your profile will be added within 48hrs\n' +
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + phone + '\n' +
      'Category: ' + category + '\n' +
      'Social Media Link: ' + socialLink + '\n' +
      'Profile Image: ' + fileName);
}
