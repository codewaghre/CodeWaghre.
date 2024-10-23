console.log(`Hello, gsap work`);

window.onload = function () {
    gsap.from(".nav-i", {
        y: -100,    // Slide from above
        opacity: 0, // Fade in from opacity 0
        duration: 2.5, // 1 second animation
        ease: "power2.out" // Smooth easing
    });
};

