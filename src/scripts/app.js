import { gsap } from "gsap";
import $ from "jquery";

const startLoader = (delay) => {
  const counterElement = $("span.counter");
  let currentValue = 0;

  const updateCounter = () => {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.text(`${currentValue}`);

    let delay = Math.floor(Math.random() * 200) + 50;

    setTimeout(updateCounter, delay);
  };
  setTimeout(updateCounter, delay);
};

$(window).on("load", function () {
  startLoader(500);

  const tl = gsap.timeline({ delay: 4 });

  tl.to(".loader", {
    duration: 1.5,
    translateY: "-100%",
    ease: "power2.inOut",
  })
    .to(
      ".ball, .loading-text",
      {
        duration: 0.5,
        opacity: 0,
      },
      "<"
    )
    .to(".freedom svg path", {
      y: 0,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.1,
    })
    .to(
      ".photos svg path",
      {
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        stagger: -0.1,
      },
      "-=1.5"
    )
    .to(".arrow, .desc", {
      x: 0,
      ease: "circ",
    })
    .to("nav", {
      y: 0,
      ease: "circ",
    });
});

const tlBALLS = gsap.timeline({ repeat: -1 });

tlBALLS
  .to(".ball:first-child", {
    duration: 1,
    left: "50%",
    top: "50%",
    translateX: "-50%",
  })
  .to(".ball:first-child", {
    duration: 1,
    left: "100%",
    translateX: "-100%",
    top: "0",
  })
  .to(".ball:first-child", {
    duration: 1,
    top: "0",
    left: "0",
    translateX: "0",
  });

tlBALLS
  .to(
    ".ball:nth-child(2n)",
    {
      duration: 1,
      left: "100%",
      translateX: "-50%",
      top: "0",
    },
    "-=3"
  )
  .to(
    ".ball:nth-child(2n)",
    {
      duration: 1,
      top: "0",
      left: "0",
      translateX: "50%",
    },
    "-=2"
  )
  .to(
    ".ball:nth-child(2n)",
    {
      duration: 1,
      left: "50%",
      top: "50%",
      translateX: "0",
    },
    "-=1"
  );

tlBALLS
  .to(
    ".ball:last-child",
    {
      duration: 1,
      top: "0",
      left: "0",
      translateX: "0",
    },
    "-=3"
  )
  .to(
    ".ball:last-child",
    {
      duration: 1,
      left: "50%",
      top: "50%",
      translateX: "-50%",
    },
    "-=2"
  )
  .to(
    ".ball:last-child",
    {
      duration: 1,
      left: "100%",
      translateX: "-100%",
      top: "0",
    },
    "-=1"
  );
