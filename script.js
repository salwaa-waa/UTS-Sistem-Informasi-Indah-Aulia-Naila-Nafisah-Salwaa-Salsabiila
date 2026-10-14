const toggleButton = document.getElementById("themeToggle");
const body = document.body;

// mode gelap / terang
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleButton.innerHTML = "<span class='icon'>☀️</span>";
} else {
  toggleButton.innerHTML = "<span class='icon'>🌙</span>";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleButton.innerHTML = "<span class='icon'>☀️</span>";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.innerHTML = "<span class='icon'>🌙</span>";
  }
});

// mobile nav
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// scroll reveal
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => revealObserver.observe(item));