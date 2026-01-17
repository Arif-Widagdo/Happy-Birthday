import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Expo, Elastic } from "gsap/all";

export function useGreetingTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const textBox = document.querySelector(".hbd-chatbox");
    const hbd = document.querySelector(".wish-hbd");

    if (!textBox || !hbd) return;

    const split = (el) => {
      el.innerHTML = `<span>${el.innerHTML
        .split("")
        .join("</span><span>")}</span>`;
    };

    split(textBox);
    split(hbd);

    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg",
    };

    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg",
    };

    const tl = gsap.timeline();
    timelineRef.current = tl; // 🔥 INI WAJIB

    tl.to(".container-greeting", { visibility: "visible", duration: 0.6 })
      .from(".one", { opacity: 0, y: 10, duration: 0.7 })
      .from(".two", { opacity: 0, y: 10, duration: 0.4 })
      .to(".one", { opacity: 0, y: 10, duration: 0.7 }, "+=3.5")
      .to(".two", { opacity: 0, y: 10, duration: 0.7 }, "-=1")
      .from(".three", { opacity: 0, y: 10, duration: 0.7 })
      .to(".three", { opacity: 0, y: 10, duration: 0.7 }, "+=3")
      .from(".four", { scale: 0.2, opacity: 0, duration: 0.7 })
      .from(".fake-btn", { scale: 0.2, opacity: 0, duration: 0.3 })
      .to(".hbd-chatbox span", {
        visibility: "visible",
        duration: 1.5,
        stagger: 0.05,
      })
      .to(
        ".fake-btn",
        { backgroundColor: "rgb(127, 206, 248)", duration: 0.1 },
        "+=4"
      )
      .to(".four", { scale: 0.2, opacity: 0, y: -150, duration: 0.5 }, "+=1")
      .from(".idea-1", ideaTextTrans)
      .to(".idea-1", ideaTextTransLeave, "+=2.5")
      .from(".idea-2", ideaTextTrans)
      .to(".idea-2", ideaTextTransLeave, "+=2.5")
      .from(".idea-3", ideaTextTrans)
      .to(".idea-3 strong", {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
        duration: 0.5,
      })
      .to(".idea-3", ideaTextTransLeave, "+=2.5")
      .from(".idea-4", ideaTextTrans)
      .to(".idea-4", ideaTextTransLeave, "+=2.5")
      .from(
        ".idea-5",
        {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
          duration: 0.7,
        },
        "+=1.5"
      )
      .to(".idea-5 span", { rotation: 90, x: 8, duration: 0.7 }, "+=1.4")
      .to(".idea-5", { scale: 0.2, opacity: 0, duration: 0.7 }, "+=2")
      .from(".idea-6 span", {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
        stagger: 0.2,
      })
      .to(".idea-6 span", {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
        stagger: 0.2,
      })
      .fromTo(
        ".baloons img",
        { opacity: 0.9, y: 1400 },
        { opacity: 1, y: -1000, duration: 2.5, stagger: 0.2 }
      )
      .from(
        ".profile-picture",
        {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45,
          duration: 0.5,
        },
        "-=2"
      )
      .from(".hat", {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
        duration: 0.5,
      })
      .from(".wish-hbd span", {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
        stagger: 0.1,
      })
      .fromTo(
        ".wish-hbd span",
        { scale: 1.4, rotationY: 150 },
        {
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: Expo.easeOut,
          stagger: 0.1,
        },
        "party"
      )
      .from(
        ".wish h5",
        { opacity: 0, y: 10, skewX: "-15deg", duration: 0.5 },
        "party"
      )
      .to(".eight svg", {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
        duration: 1.5,
        stagger: 0.3,
      })
      .to(".six", { opacity: 0, y: 30, zIndex: "-1", duration: 0.5 })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(".last-smile", { rotation: 90, duration: 0.5 }, "+=1");

    return () => tl.kill();
  }, []);

  return {
    restart: () => timelineRef.current?.restart(),
  };
}
