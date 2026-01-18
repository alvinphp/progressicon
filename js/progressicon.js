
document.addEventListener("DOMContentLoaded", function () {

      // Configuración de colores
  Piecon.setOptions({
        color: '#4caf50',      // color del progreso (verde)
        background: '#e8f5e9', // fondo claro
        shadow: '#c8e6c9',     // borde/sombra
        fallback: false       // no usar el título como fallback
      });

  let progress = 0;

      // Inicia en 0%
  Piecon.setProgress(progress);

      // Simula una carga
  const interval = setInterval(() => {
    progress += 10;
    Piecon.setProgress(progress);

    if (progress >= 100) {
      clearInterval(interval);

          // Espera un momento y restaura el favicon original
      setTimeout(() => {
        Piecon.reset();
      }, 1000);
    }
  }, 500);

});
