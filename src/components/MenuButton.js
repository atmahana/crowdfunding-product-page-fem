export function createMenuButton(imageUrl){
  const button = document.createElement("button");
  button.classList.add("btn");
  button.style.backgroundColor = "transparent";
  button.setAttribute("id", "mobile-menu-btn")

  const icon = document.createElement("img");
  icon.setAttribute("id", "menu-icon");
  icon.setAttribute("alt", "mobile menu icon");

  button.appendChild(icon);

  return button;
}