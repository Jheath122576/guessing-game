const colors = ["blue", "red", "orange", "green", "yellow"];
const cards = document.querySelectorAll(".card");
const resetButton =document.querySelector(".reset");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        getCardColor(card);
    });
});

resetButton.addEventListener("click", () => {
    location.reload();
});

function getCardColor(card) {
    let currentColor = card.style.backgroundColor;
    if (currentColor !== "") return false;
    let x = Math.round(Math.random() * (colors.length -1));
    let color = colors[x];
    card.style.backgroundColor = color;
}