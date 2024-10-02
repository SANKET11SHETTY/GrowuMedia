// Text Circle
const text = document.getElementById("circle-text");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 7.1}deg);">${char}</span>`
  )
  .join("");

// Scroll Top Button
let scrollProgress = document.getElementById("progress");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
});

// Auto Type
let typed = new Typed(".auto-typers", {
  strings: ["Agency", "Firm", "Org"],
  typeSpeed: 150,
  backSpeed: 130,
  loop: true,
});

// GSAP
function page1Animation(){
  var tl = gsap.timeline()

// Nav
tl.from("nav .logo-main, nav li, nav button",{
  y: -40,
  opacity:0,
  delay:0.5,
  duration:0.7,
  stagger:0.15
})

// Video Editing Agency
tl.from(".video-editing h1",{
  x: -200,
  opacity:0,
  duration:1,
},"-=0.3")
tl.from(".video-editing h2",{
  x: 200,
  opacity:0,
  duration:1,
},"-=0.3")
tl.from(".video-editing p",{
  x: -200,
  opacity:0,
  duration:1,
},"-=0.3")
tl.from(".b1",{
  x: -200,
  opacity:0,
  duration:1,
},"navBtn")
tl.from(".b2",{
  x: 200,
  opacity:0,
  duration:1,
}, "navBtn")

tl.from(".our-results h6",{
  opacity:0,
  duration:0.4
})

tl.from(".data1",{
  opacity:0,
  y:30,
  stagger:0.25,
  duration:1
})

tl.from(".b-logo-1",{
  opacity:0,
  y:-30,
  stagger:0.25,
  duration:1
})
}

page1Animation()

// Gsap Cursor
var cursor = document.querySelector("#cursor");
window.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 1,
    ease: "back.out",
  });
  console.log(event);
});

// Pre Loader
var loader = document.getElementById("pre-loader1");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

//  Text Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("ani-h-show");
    } else {
      entry.target.classList.remove("ani-h-show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".ani-h");
hiddenElements.forEach((el) => observer.observe(el));
