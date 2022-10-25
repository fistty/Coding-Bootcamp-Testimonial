const cardItem = document.querySelectorAll(".card");
const buttonNext = document.querySelectorAll("button");

buttonNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    const closeCard = btn.closest(".card");
    console.log(closeCard);
    cardItem.forEach((items) => {
      items.style.display = "flex";
    });
    closeCard.style.display = "none";
  });
});
