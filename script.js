// Dropdown hiển thị mượt
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(menu => {
  let timeout;
  menu.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    menu.classList.add('show');
  });
  menu.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      menu.classList.remove('show');
    }, 400);
  });
});

// Scroll lên đầu trang
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Login & Register modal
const openLogin = document.getElementById("openLogin");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");

const openRegister = document.getElementById("openRegister");
const registerModal = document.getElementById("registerModal");
const closeRegister = document.getElementById("closeRegister");

openLogin.onclick = (e) => {
  e.preventDefault();
  loginModal.style.display = "flex";
};
closeLogin.onclick = () => loginModal.style.display = "none";
openRegister.onclick = (e) => {
  e.preventDefault();
  registerModal.style.display = "flex";
};
closeRegister.onclick = () => registerModal.style.display = "none";

window.onclick = (e) => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === registerModal) registerModal.style.display = "none";
};

// Shrink hero section on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3) {
    document.body.classList.add("shrink");
  } else {
    document.body.classList.remove("shrink");
  }
});