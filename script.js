// DARK MODE
const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

toggle.onclick = () => {
  document.body.classList.toggle("light");

  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
};

// CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// REVEAL
function reveal(){
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);