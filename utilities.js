const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    navbar.classList.add("backdrop-blur-md", "bg-slate-800/10");
  } else {
    navbar.classList.remove("backdrop-blur-md", "bg-slate-800/10");
  }
});