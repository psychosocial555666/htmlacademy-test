let tabLinks = document.querySelectorAll(".tabs__link");
let tabContents = document.querySelectorAll(".tabs__pane");
let tabLinkActive = document.querySelector(".tabs__link--active");
let tabContentOpened = document.querySelector(".tabs__pane--show")

let onTabLinkPress = (evt)=> {
  evt.preventDefault();
  if (evt.target.classList.contains("tabs__link--active")) {
    console.log("active");
    return;
  }

  let activeLinkName = evt.target.name;

  tabLinks.forEach((item) => {
    item.classList.remove("tabs__link--active");
    if (item.name === activeLinkName) {
      item.classList.add("tabs__link--active");
      console.log(item);
    }
  });

  tabContents.forEach((item) => {
    item.classList.remove("tabs__pane--show");
    if (item.id === activeLinkName) {
      item.classList.add("tabs__pane--show");
      console.log(item);
    }
  });
}

tabLinks.forEach((item) => {
  item.addEventListener("click", onTabLinkPress);
})
