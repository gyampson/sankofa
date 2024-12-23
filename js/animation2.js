gsap.registerPlugin(ScrollTrigger);
gsap.from("p", {
  duration: 5,
  x: -900,
  ease: "power2.inOut",
  stagger: 0.5,
});
gsap.from("footer", {
  duration: 3,
  x: 200,
  ease: "power2.inOut",
  stagger: 0.5,
});
gsap.set(".logo1", {
  borderRadius: 0,
});
gsap.to(".logo1", {
  borderRadius: 50,
  duration: 1,
  x: 100,
  ease: "power1",
  yoyo: true,
  repeat: -1,
  stagger: {
    amount: 2,
    from: 8,
    each: 5,
  },
});
gsap.to("footer", {
  scrollTrigger: {
    trigger: ".row",
    toggleActions: "restart ",
    duration: 3,
  },
  x: 0,
  duration: 3,
  stagger: {
    amount: 6,
    from: "start",
    each: 0.5,
  },
});
