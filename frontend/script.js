console.log("hello")
document.addEventListener("DOMContentLoaded", () => {
    const timelines = document.querySelectorAll('.timeline');
    const containers = document.querySelectorAll('.container');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // Add animate class to start animation
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
  
    // Observe both timelines and containers
    timelines.forEach(timeline => {
      observer.observe(timeline);
    });
    
    containers.forEach(container => {
      observer.observe(container);
    });
  });
  