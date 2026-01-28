const form = document.getElementById("contact-form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;

  message.textContent = `Thanks, ${name}! Your message was sent 🚀`;
});
