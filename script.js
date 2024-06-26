const menuLinks = document.querySelectorAll(".menu-link");
const menu = document.querySelector(".menu");
const line = document.createElement("div");

line.className = "line-effects";

document.body.appendChild(line);

menuLinks.forEach((link) =>
  link.addEventListener("mouseenter", handleLinkHover)
);
menu.addEventListener("mouseleave", handleLeaveMenu);
function handleLeaveMenu() {
  line.style.width = 0;
}
function handleLinkHover(event) {
  const elm = event.target;
  const elmRect = elm.getBoundingClientRect();
  const { width, left, height, top } = elmRect;
  const offsetBottom = 6;
  line.style.width = `${width}px`;
  line.style.left = `${left}px`;
  line.style.top = `${top + height + offsetBottom}px`;
}
