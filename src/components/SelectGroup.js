const selectGroupData = [
  {
    title: "Pledge with no reward",
    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    value: 0,
    count: null,
  },
  {
    title: "Bamboo Stand",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    value: 25,
    count: 101,
  },
  {
    title: "Black Edition Stand",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    value: 75,
    count: 64,
  },
  {
    title: "Mahogany Special Edition",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    value: 200,
    count: 0,
  },
];

function createMobileSelectGroup(props) {
  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("select-group");

  const input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("name", "pledge-value");
  input.setAttribute("id", `option-${props.index}`);
  input.setAttribute("value", props.inputValue);
  props.isDisabled ? input.setAttribute("disabled", true) : null;

  const textGroup = document.createElement("div");
  textGroup.classList.add("text-group");

  const childWrapper = document.createElement("div");

  const h4Element = document.createElement("h4");
  h4Element.textContent = props.title;

  const pValueElement = document.createElement("p");
  props.inputValue !== 0 ? pValueElement.textContent = `Pledge $${props.inputValue} or more` : pValueElement.textContent = '';

  const pDescElement = document.createElement("p");
  pDescElement.textContent = props.description;
  pDescElement.classList.add("text-secondary");

  const pCountElement = document.createElement("p");
  pCountElement.textContent = props.count;
  pCountElement.classList.add("font-bold", "text-md");
  let spanCountElement;
  if (props.count !== null) {
    spanCountElement = document.createElement("span");
    spanCountElement.textContent = "left";
    spanCountElement.classList.add(
      "font-regular",
      "text-base",
      "text-secondary",
      "ml-1"
    );
  }

  mainWrapper.appendChild(input);
  mainWrapper.appendChild(textGroup);
  mainWrapper.appendChild(pDescElement);
  if (props.count !== null) {
    mainWrapper.appendChild(pCountElement);
    pCountElement.appendChild(spanCountElement);
  }

  textGroup.appendChild(input);
  textGroup.appendChild(childWrapper);
  childWrapper.appendChild(h4Element);
  childWrapper.appendChild(pValueElement);

  return mainWrapper;
}
function createDesktopSelectGroup(props) {
  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("select-group");

  const input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("name", "pledge-value");
  input.setAttribute("id", `option-${props.index}`);
  input.setAttribute("value", props.inputValue);
  props.isDisabled ? input.setAttribute("disabled", true) : null;

  const textGroup = document.createElement("div");
  textGroup.classList.add("text-group");

  const childWrapper = document.createElement("div");

  const h4Element = document.createElement("h4");
  h4Element.textContent = props.title;

  const pValueElement = document.createElement("p");
  props.inputValue !== 0 ? pValueElement.textContent = `Pledge $${props.inputValue} or more` : pValueElement.textContent = '';

  const pCountElement = document.createElement("p");
  pCountElement.classList.add("text-md");
  let spanCountElement;
  if (props.count !== null) {
    pCountElement.textContent = props.count;
    spanCountElement = document.createElement("span");
    spanCountElement.textContent = "left";
    spanCountElement.classList.add("text-base");
  } else {
    pCountElement.textContent = '';
  }

  const pDescElement = document.createElement("p");
  pDescElement.textContent = props.description;
  pDescElement.classList.add("text-secondary", "text-base");

  mainWrapper.appendChild(input);
  mainWrapper.appendChild(textGroup);
  textGroup.appendChild(childWrapper);
  childWrapper.appendChild(h4Element);
  childWrapper.appendChild(pValueElement);
  childWrapper.appendChild(pCountElement);
  props.count !== null ? pCountElement.appendChild(spanCountElement) : null;
  textGroup.appendChild(pDescElement);

  return mainWrapper;
}

export { selectGroupData, createMobileSelectGroup, createDesktopSelectGroup };
