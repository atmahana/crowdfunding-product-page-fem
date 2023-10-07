import "./styles/style.scss";
import "./styles/reset.scss";

import {
  createInputGroup,
  removeAllInputGroup,
} from "./src/components/InputGroup";
import {
  selectGroupData,
  createMobileSelectGroup,
  createDesktopSelectGroup,
} from "./src/components/SelectGroup";
import { createMenuButton } from "./src/components/MenuButton";

const selectModal = document.querySelector(".select-modal");
const completeModal = document.querySelector(".complete-modal");
const completeModalBtn = document.querySelector("#complete-modal-btn");
const openBtns = document.querySelectorAll(".select-btn");
const form = document.querySelector("form");
const pledgeLabels = form.querySelectorAll(".card");
const navBar = document.querySelector("#navigation");
const navMenu = document.querySelector("#nav-menu");
const closeModalBtn = document.querySelector("#close-modal-btn");

let currentSelectedIndex = 0,
  width = screen.width,
  isMobileMenuOpen = false,
  menuIconUrl = "/public/images/icon-hamburger.svg";

if (width < 640) {
  const menuButton = createMenuButton();
  navBar.appendChild(menuButton);

  const mobileMenuButton = navBar.querySelector("#mobile-menu-btn");
  const mobileMenuIcon = mobileMenuButton.querySelector("#menu-icon");

  mobileMenuIcon.src = menuIconUrl;

  mobileMenuButton.addEventListener("click", () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    isMobileMenuOpen
      ? (menuIconUrl = "/public/images/icon-close-menu.svg")
      : (menuIconUrl = "/public/images/icon-hamburger.svg");

    if (isMobileMenuOpen) {
      navMenu.style.display = "flex";
      mobileMenuIcon.src = menuIconUrl;
    } else {
      navMenu.style.display = "none";
      mobileMenuIcon.src = menuIconUrl;
    }
  });
}

closeModalBtn.addEventListener('click', () => {
  selectModal.close();
})

pledgeLabels.forEach((label, index) => {
  let isDisabled = false;
  if (label.classList.contains("no-stock")) {
    isDisabled = true;
  }

  const mobileSelectGroup = createMobileSelectGroup({
    index: index,
    inputValue: selectGroupData[index].value,
    title: selectGroupData[index].title,
    description: selectGroupData[index].description,
    count: selectGroupData[index].count,
    isDisabled: isDisabled,
  });

  const desktopSelectGroup = createDesktopSelectGroup({
    index: index,
    inputValue: selectGroupData[index].value,
    title: selectGroupData[index].title,
    description: selectGroupData[index].description,
    count: selectGroupData[index].count,
    isDisabled: isDisabled,
  });

  if (width > 640) {
    label.appendChild(desktopSelectGroup);
  } else {
    label.appendChild(mobileSelectGroup);
  }
});

const pledgeRadios = document.querySelectorAll('input[type="radio"]');

openBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    pledgeRadios[index].checked = true;
    currentSelectedIndex = index;
    pledgeLabels[currentSelectedIndex].classList.add("selected-option");
    if (index !== 0) {
      const parentContainer = pledgeLabels[index];

      const inputGroup = createInputGroup({
        inputValue: pledgeRadios[index].value,
        onClick: () => completeModal.showModal(),
      });

      parentContainer.appendChild(inputGroup);
    }
    selectModal.showModal();
  });
});

selectModal.addEventListener("close", () => {
  pledgeLabels[currentSelectedIndex].classList.remove("selected-option");
  currentSelectedIndex = 0;
  removeAllInputGroup();
});

pledgeRadios.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    handleRadioChange(index);
  });
});

completeModalBtn.addEventListener("click", () => {
  completeModal.close();
});

function handleRadioChange(index) {
  pledgeLabels[currentSelectedIndex].classList.remove("selected-option");
  pledgeLabels[index].classList.add("selected-option");
  currentSelectedIndex = index;
  removeAllInputGroup();

  if (index !== 0) {
    const parentContainer = pledgeLabels[index];

    const inputGroup = createInputGroup({
      inputValue: pledgeRadios[index].value,
      onClick: () => completeModal.showModal(),
    });

    parentContainer.appendChild(inputGroup);
  }
}
