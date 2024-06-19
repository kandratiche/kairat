gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#header",
    start: "top top+150px", 
    end: "max",
    pin: true,
    pinSpacing: false
  });