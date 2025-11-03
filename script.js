const toggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
  const current = body.getAttribute("data-theme");
  const newTheme = current === "light" ? "dark" : "light";
  body.setAttribute("data-theme", newTheme);
  toggle.textContent = newTheme === "light" ? "🌙" : "☀️";
});
