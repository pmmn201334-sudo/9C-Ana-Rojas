(function () {
  var cantidad = 40;

  var estilos = document.createElement('style');
  estilos.textContent = `
    .mariposa {
      position: fixed;
      bottom: -40px;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      will-change: transform;
      text-shadow: 0 0 6px rgba(168, 85, 247, 0.6);
      line-height: 1;
      user-select: none;
    }
  `;
  document.head.appendChild(estilos);

  function crearMariposa() {
    var m = document.createElement('div');
    m.className = 'mariposa';
    m.textContent = '\uD83E\uDD8B';

    var tamano = 10 + Math.random() * 10;
    var mecer = Math.round(Math.random() * 60 - 30);
    var brillo = (0.35 + Math.random() * 0.4).toFixed(2);
    var duracion = 12 + Math.random() * 14;
    var retraso = Math.random() * 1.5;
    var inicioVertical = Math.round(5 + Math.random() * 105);

    m.style.fontSize = tamano + 'px';
    m.style.left = Math.random() * 100 + 'vw';
    m.style.bottom = inicioVertical + 'vh';

    m.animate(
      [
        { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 0 },
        { transform: 'translateY(-30vh) translateX(' + mecer + 'px) rotate(15deg)', opacity: brillo, offset: 0.2 },
        { transform: 'translateY(-70vh) translateX(' + (-mecer) + 'px) rotate(-15deg)', opacity: brillo },
        { transform: 'translateY(-120vh) translateX(0) rotate(0deg)', opacity: 0 }
      ],
      {
        duration: duracion * 1000,
        delay: retraso * 1000,
        iterations: Infinity,
        easing: 'ease-in-out'
      }
    );

    document.body.appendChild(m);
  }

  for (var i = 0; i < cantidad; i++) {
    crearMariposa();
  }
})();
