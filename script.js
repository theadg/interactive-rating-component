const Card = (function () {
  const buttons = document.querySelectorAll(".card__buttons--digit");
  const submitButton = document.querySelector(".card__submit");
  const cardInitialForm = document.querySelector(".card__body");
  const cardOutputForm = document.querySelector(".card__submitted");
  const cardRating = document.querySelector(".card__rating");
  let selectedButton;

  buttons.forEach((button, index) => {
    button.onclick = () => {
      selectedButton = ++index;
      console.log(selectedButton);
      removeSelection();
      button.classList.add("selected");
      cardRating.textContent = `You Selected ${selectedButton} out of 5`;
    };
  });

  const removeSelection = () => {
    buttons.forEach((button) => button.classList.remove("selected"));
  };

  submitButton.onclick = () => showResult();

  const showResult = () => {
    cardInitialForm.classList.add("hidden");
    cardOutputForm.classList.remove("hidden");
  };
})();
