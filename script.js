

//Skills Progress Bar Animation
const progressBars = document.querySelectorAll(".progress");

const animateProgress = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progress = entry.target;
      const targetWidth = progress.getAttribute("data-progress");
      progress.style.width = targetWidth + "%";
    } else {
      const progress = entry.target;
      progress.style.width = "0%";
    }
  });
};

const observer = new IntersectionObserver(animateProgress, {
  threshold: 0.5,
});

progressBars.forEach((bar) => {
  observer.observe(bar);
});



// Toggle navigation menu in Mobile View
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
  }
// Close the menu when a nav link is clicked (Mobile view)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("active");
  });
});

progressBars.forEach((progressBar) => {
  observer.observe(progressBar);
});


//Home Section Typed Text Animation
var typed = new Typed("#element", {
  strings: ["Java", "Spring Boot", "Microservices","ReactJS"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  showCursor: false,
});


// Contact Form Submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message sent successfully!");
    this.reset(); // Clear the form after submission
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


