document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        status.textContent = "¡Mensaje enviado con éxito!";
        status.style.color = "limegreen";
        form.reset();
      } else {
        throw new Error("Error al enviar mensaje");
      }
    } catch (error) {
      status.textContent = "Hubo un problema al enviar el mensaje.";
      status.style.color = "crimson";
    }
  });
});
