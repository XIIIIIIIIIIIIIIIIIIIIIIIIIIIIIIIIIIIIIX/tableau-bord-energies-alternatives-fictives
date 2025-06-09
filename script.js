document.addEventListener('DOMContentLoaded', function() {
  // Éléments de carte pour animation
  const cards = document.querySelectorAll('.card');
  
  // Animation d'entrée progressive
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200 * index);
  });
  
  // Animation des graphs
  setTimeout(() => {
    const paths = document.querySelectorAll('.chart polyline, .chart path, .chart rect');
    paths.forEach(path => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.animation = `dash 3s ease-out forwards`;
      path.style.animationDelay = '0.5s';
    });
  }, 500);
});

// Animation SVG en CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
document.head.appendChild(style);