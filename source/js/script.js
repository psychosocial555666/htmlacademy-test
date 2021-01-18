let tabLinks = document.querySelectorAll(".tabs__link");
let tabContents = document.querySelectorAll(".tabs__pane");
let tabLinkActive = document.querySelector(".tabs__link--active");
let tabContentOpened = document.querySelector(".tabs__pane--show")
let cardLinks = document.querySelectorAll(".visit__link");

let onLinkPress = (evt)=> {
  let activeLinkName = evt.target.name;

  tabLinks.forEach((item) => {
    item.classList.remove("tabs__link--active");
    if (item.name === activeLinkName) {
      item.classList.add("tabs__link--active");
    }
  });

  tabContents.forEach((item) => {
    item.classList.remove("tabs__pane--show");
    if (item.id === activeLinkName) {
      item.classList.add("tabs__pane--show");
    }
  });
}

let onTabLinkPress = (evt)=> {
  evt.preventDefault();
  if (evt.target.classList.contains("tabs__link--active")) {
    return;
  }
  onLinkPress(evt);
}

tabLinks.forEach((item) => {
  item.addEventListener("click", onTabLinkPress);
})

cardLinks.forEach((item) => {
  item.addEventListener("click", onLinkPress);
})

// ---------------------
let modal = document.querySelectorAll(".modal");
let modalTour = document.querySelector(".modal--tour");
let modalSuccess = document.querySelector(".modal--success");

let buyTourButtons = document.querySelectorAll(".rate__buy, .information__buy");
let questionsForm = document.querySelector(".questions__form");
let modalForm = document.querySelector(".modal__form");

let openModal = (modal) => {
  modal.classList.add("modal--show");
  let closeModalButton = modal.querySelector(".modal__close");
  let modalOverlay = modal.querySelector(".modal__overlay");

  closeModalButton.addEventListener("click", onCloseButtonPress);
  modalOverlay.addEventListener("click", onOverlayClick);
  window.addEventListener("keydown", onEscKeyPress);
}

let closeModal = () => {
  modal.forEach((item) => {
    item.classList.remove("modal--show");
    let modalOverlay = item.querySelector(".modal__overlay");
    let closeModalButton = item.querySelector(".modal__close");
    closeModalButton.removeEventListener("click", onCloseButtonPress);
    modalOverlay.removeEventListener("click", onOverlayClick);
  })
  window.removeEventListener("keydown", onEscKeyPress);
}

let onModalTourOpen = () => {
  openModal(modalTour);
};

let onModalSuccessOpen = (evt) => {
  closeModal();
  let tel = evt.target.querySelector(".custom-field__input--tel");
  let email = evt.target.querySelector(".custom-field__input--email");
  if (tel.value && email.value !== '') {
    evt.preventDefault();
    openModal(modalSuccess);
    tel.value = "";
    email.value = "";
  } else {
    evt.preventDefault();
    tel.setAttribute("required", "required");
    email.setAttribute("required", "required");
  }
};

let onCloseButtonPress = () => {
  closeModal();
}

let onOverlayClick = (evt) => {
  if (evt.target.matches(".modal__overlay")) {
    closeModal();
  }
}

let onEscKeyPress = (evt) => {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      closeModal();
  };
};

questionsForm.addEventListener("submit", onModalSuccessOpen);
modalForm.addEventListener("submit", onModalSuccessOpen);

buyTourButtons.forEach((item) => {
  item.addEventListener("click", onModalTourOpen);
});

// ----------------

let menu = document.querySelector(".main-nav");
let menuToggler = document.querySelector(".main-nav__toggle");

menu.classList.remove("main-nav--nojs");
menu.classList.add("main-nav--closed");

menuToggler.addEventListener ("click", () => {
  menu.classList.toggle("main-nav--closed");
})
