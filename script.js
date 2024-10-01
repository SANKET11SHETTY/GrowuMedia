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
