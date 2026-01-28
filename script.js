const form = document.getElementById("contact-form");
const message = document.getElementById("message");
const themeBtn = document.getElementById("theme-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  message.textContent = `Thanks, ${name}! Your message was sent 🚀`;
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
