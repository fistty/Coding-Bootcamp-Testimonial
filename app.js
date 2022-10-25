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

// window.addEventListener("resize", () => {
//   if (window.innerWidth < 1200) {
//     cardItem.forEach((card) => {
//       card.style.display = "block";
//     });
//   } else {
//     cardItem.forEach((card) => {
//       card.style.display = "flex";
//     });
//   }
// });

// button.forEach((prev) => {
//   prev.addEventListener("click", () => {
//     const card = prev.closest(".card");
//     cardItem.forEach((card) => {
//       card.style.display = "block";
//     });
//     card.style.display = "none";
//   });
// });
