const cardTimeFrame = document.querySelectorAll(".card__timeframe");

// ACTIVATED TIME FRAMES
cardTimeFrame.forEach((element) => {
  element.addEventListener("click", (event) => {
    for (const el of cardTimeFrame) {
      if (el.classList.contains("selected")) {
        el.classList.remove("selected");
      }
    }
    element.classList.add("selected");
  });
});

// HOVER STATES ON CARD BACKGROUND AND DOT BUTTONS
