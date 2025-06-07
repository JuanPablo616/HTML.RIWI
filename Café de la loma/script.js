// Ocultar animación de carga
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Alternar modo oscuro / claro
const toggleBtn = document.getElementById("modo-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
});

// Validación del formulario de reservas
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = formulario.nombre.value.trim();
  const email = formulario.email.value.trim();
  const fecha = formulario.fecha.value;
  const hora = formulario.hora.value;

  if (!nombre || !email || !fecha || !hora) {
    mensaje.textContent = "Por favor completa todos los campos.";
    mensaje.style.color = "red";
    return;
  }

  mensaje.textContent = "¡Reserva enviada correctamente!";
  mensaje.style.color = "green";
  formulario.reset();
});
