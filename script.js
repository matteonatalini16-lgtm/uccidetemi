gsap.registerPlugin(MotionPathPlugin);

// comparsa lenta del testo
gsap.to("#logo", {
  opacity: 1,
  y: "-=50",
  duration: 4,
  ease: "power1.out"
});

// timeline jet + scia
const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

// jet lungo la scia
tl.to("#jet", {
  duration: 5,
  motionPath: {
    path: "#trail",
    align: "#trail",
    autoRotate: true,
    curviness: 1.5
  }
}, 0);

// animazione scia
tl.fromTo("#trail",
  { strokeDasharray: 1800, strokeDashoffset: 1800 },
  { strokeDashoffset: 0, duration: 4.5 }
, 0);
