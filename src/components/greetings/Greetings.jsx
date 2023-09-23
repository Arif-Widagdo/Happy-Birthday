import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "../../assets/css/greetings.css";
import gsap from "gsap";
import { Expo, Elastic } from "gsap/all";

function Greetings() {
  useEffect(() => {
    // trigger to play music in the background with sweetalert
    window.addEventListener("load", () => {
      Swal.fire({
        title: "Do you want to play music in the background?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          document.querySelector(".song").play();
          animationTimeline();
        } else {
          animationTimeline();
        }
      });
    });

    // animation timeline
  }, []);

  return (
    <>
      <audio className="song" loop autoPlay>
        <source src={require("../../assets/music/hbd.mpeg")} />
        Your browser isn't invited for super fun audio time.
      </audio>

      <div className="container-greeting">
        <div className="one">
          <h1 className="one">
            Hi
            <span id="name"> Rika</span>
          </h1>
          <p className="two" id="greetingText">
            I really like your name btw!
          </p>
        </div>

        <div className="three">
          <p>It's your birthday!! :D</p>
        </div>

        <div className="four">
          <div className="text-box">
            <p className="hbd-chatbox">
              Selamat ulang tahun yang ke-22 kepada wanita cantik ini! Hari ini
              adalah momen yang istimewa untuk merayakan pencapaianmu dan
              kecantikanmu yang tak terbantahkan. Semoga hari ini penuh dengan
              kebahagiaan dan keceriaan yang melimpah. Semoga usiamu yang baru
              ini membawa berbagai kesuksesan, kebahagiaan, dan kesenangan yang
              tak terhingga. Teruslah bersinar seperti bintang yang bercahaya,
              dan teruslah menaklukkan dunia dengan kecantikanmu yang luar
              biasa. Selamat ulang tahun yang tak terlupakan, semoga segala
              impianmu menjadi nyata!
            </p>
            <p className="fake-btn">Send</p>
          </div>
        </div>

        <div className="five">
          <p className="idea-1">That's what I was going to do.</p>
          <p className="idea-2">But then I stopped.</p>
          <p className="idea-3">
            I realised, I wanted to do something
            <br />
            <strong>special</strong>.
          </p>
          <p className="idea-4">Because,</p>
          <p className="idea-5">
            You are Special
            <span> :D</span>
          </p>
          <p className="idea-6">
            <span>S</span>
            <span>O</span>
          </p>
        </div>

        <div className="six">
          <img
            src={require("../../assets/img/rika.jpg")}
            alt="profile"
            className="profile-picture"
            id="imagePath"
          />
          <img
            src={require("../../assets/img/hat.png")}
            alt="hat"
            className="hat"
          />
          <div className="wish">
            <h3 className="wish-hbd">Happy Birthday!</h3>
            <h5 id="wishText">i'm always to be with you! :D</h5>
          </div>
        </div>

        <div className="seven">
          <div className="baloons">
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon2.png")} alt="" />
            <img src={require("../../assets/img/ballon1.png")} alt="" />
            <img src={require("../../assets/img/ballon3.png")} alt="" />
          </div>
        </div>

        <div className="eight">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
        </div>

        <div className="nine">
          <p>Okay, now come back and tell me if you liked it.</p>
          <p id="replay">Or click, if you want to watch it again.</p>
          <p className="last-smile">:D</p>
        </div>
      </div>
    </>
  );
}

function animationTimeline() {
  // split chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

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

  // timeline
  const tl = gsap.timeline();

  tl.to(".container-greeting", {
    visibility: "visible",
    duration: 0.6,
  })
    .from(".one", {
      opacity: 0,
      y: 10,
      duration: 0.7,
    })
    .from(".two", {
      opacity: 0,
      y: 10,
      duration: 0.4,
    })
    .to(
      ".one",
      {
        opacity: 0,
        y: 10,
        duration: 0.7,
      },
      "+=3.5"
    )
    .to(
      ".two",
      {
        opacity: 0,
        y: 10,
        duration: 0.7,
      },
      "-=1"
    )
    .from(".three", {
      opacity: 0,
      y: 10,
      duration: 0.7,
    })
    .to(
      ".three",
      {
        opacity: 0,
        y: 10,
        duration: 0.7,
      },
      "+=3"
    )
    .from(".four", {
      scale: 0.2,
      opacity: 0,
      duration: 0.7,
    })
    .from(".fake-btn", {
      scale: 0.2,
      opacity: 0,
      duration: 0.3,
    })
    .to(".hbd-chatbox span", {
      visibility: "visible",
      duration: 1.5,
      stagger: 0.05,
    })
    .to(
      ".fake-btn",
      {
        backgroundColor: "rgb(127, 206, 248)",
        duration: 0.1,
      },
      "+=4"
    )
    .to(
      ".four",
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
        duration: 0.5,
      },
      "+=1"
    )
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
    .to(
      ".idea-5 span",
      {
        rotation: 90,
        x: 8,
        duration: 0.7,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      {
        scale: 0.2,
        opacity: 0,
        duration: 0.7,
      },
      "+=2"
    )
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
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
        duration: 2.5,
        stagger: 0.2,
      }
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
      {
        scale: 1.4,
        rotationY: 150,
      },
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
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
        duration: 0.5,
      },
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
    .to(".six", {
      opacity: 0,
      y: 30,
      zIndex: "-1",
      duration: 0.5,
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      {
        rotation: 90,
        duration: 0.5,
      },
      "+=1"
    );

  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
}

export default Greetings;
