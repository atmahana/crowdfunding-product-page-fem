function createInputGroup(props) {
  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("flex-between", "input-group");

  const label = document.createElement("label");
  label.setAttribute("for", "pledge-value");
  label.textContent = "Enter your pledge";

  const childWrapper = document.createElement("div");

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("id", "pledge-value");
  input.setAttribute("value", props.inputValue);
  input.setAttribute("placeholder", props.inputValue);

  const button = document.createElement("button");
  button.classList.add("btn");
  button.setAttribute("id", "continue-btn");
  button.textContent = "Continue";
  button.addEventListener("click", props.onClick);

  mainWrapper.appendChild(label);
  mainWrapper.appendChild(childWrapper);
  childWrapper.appendChild(input);
  childWrapper.appendChild(button);

  return mainWrapper;
}

function removeAllInputGroup() {
  const inputGroups = document.querySelectorAll(".input-group");
  inputGroups.forEach((group) => {
    group.remove();
  });
}

export { createInputGroup, removeAllInputGroup };
