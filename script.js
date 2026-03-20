let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");

let yesSize = 18;

/* move NO + grow YES */
function moveButton() {
  let btnWidth = noBtn.offsetWidth;
  let btnHeight = noBtn.offsetHeight;

  let x = Math.random() * (window.innerWidth - btnWidth);
  let y = Math.random() * (window.innerHeight - btnHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  /* YES grows */
  yesSize += 4;
  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = (yesSize / 1.5) + "px";
}

/* mouse move detect */
document.addEventListener("mousemove", (e) => {
  let rect = noBtn.getBoundingClientRect();
  let distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );
  if (distance < 120) {
    moveButton();
  }
});

/* mobile touch */
document.addEventListener("touchstart", (e) => {
  let touch = e.touches[0];
  let rect = noBtn.getBoundingClientRect();
  let distance = Math.hypot(
    touch.clientX - (rect.left + rect.width / 2),
    touch.clientY - (rect.top + rect.height / 2)
  );
  if (distance < 140) {
    moveButton();
  }
});

/* block NO click */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveButton();
});

/* YES click */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="color:white; text-align:center; margin-top:40vh;">
      Thanks😍 Bkash: 01329520070 😁
    </h1>
  `;
});