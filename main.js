// Function to start the counting animation
function startCountingAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    // Options for the intersection observer
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.75 // Trigger the animation when 75% of the element is visible
    };
    
    // Intersection observer callback function
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute('data-target');
          const increment = Math.ceil(target / 100); // Increment by 1% of the target value
          let currentCount = 0;
          
          // Function to increment the count
          const updateCount = () => {
            if (currentCount < target) {
              currentCount += increment;
              entry.target.textContent = currentCount;
              setTimeout(updateCount, 10); // Adjust the speed of the animation here
            } else {
              entry.target.textContent = target;
              observer.unobserve(entry.target);
            }
          };
          
          updateCount();
        }
      });
    };
    
    // Create an intersection observer
    const observer = new IntersectionObserver(callback, options);
    
    // Observe each counter element
    counters.forEach(counter => {
      observer.observe(counter);
    });
  }
  
  // Call the function to start the counting animation when the DOM is loaded
  document.addEventListener('DOMContentLoaded', startCountingAnimation);
  