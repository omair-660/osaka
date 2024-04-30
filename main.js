function startCountingAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    
    const options = {
      root: null, 
      threshold: 0.75 
    };
    
    
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute('data-target');
          const increment = Math.ceil(target / 100); 
          let currentCount = 0;
          
  
          const updateCount = () => {
            if (currentCount < target) {
              currentCount += increment;
              entry.target.textContent = currentCount;
              setTimeout(updateCount, 10);
            } else {
              entry.target.textContent = target;
              observer.unobserve(entry.target);
            }
          };
          
          updateCount();
        }
      });
    };
    
    
    const observer = new IntersectionObserver(callback, options);
    
    counters.forEach(counter => {
      observer.observe(counter);
    });
  }
  
  document.addEventListener('DOMContentLoaded', startCountingAnimation);

  let span2 = document.getElementById("span-2");
  let span3 = document.getElementById("span-3");
  let menu = document.getElementsByClassName("navbar-toggler")[0];

  menu.onclick = function(){
    span2.classList.toggle("open");
    span3.classList.toggle("open");
  }
