// DARK MODE START
let darkBtn = document.querySelector('.darkBtn')
let body = document.querySelector ( 'body')
let headding = document.querySelector ('#lightMode h2')
darkBtn.addEventListener('click', () => {
    body.classList.toggle('darkMode')
    if (body.classList.contains('darkMode')){
        headding.innerHTML = ('Dark Mode')
    }
    else{
        headding.innerHTML = ('Light Mode')
    }
});
// DARK MODE ENDS

// CURSOR POINTS START
let cursor = document.querySelector(".cursor");
let cursorSm = document.querySelector(".cursor-sm");
function customMouseCursor(event) {
  let topValue = event.clientY;
  let leftValue = event.clientX;
  cursor.style.top = `${topValue}px`;
  cursor.style.left = `${leftValue}px`;
  cursorSm.style.top = `${topValue}px`;
  cursorSm.style.left = `${leftValue}px`;
}
window.addEventListener("mousemove", customMouseCursor);
// CURSOR POINTS ENDS