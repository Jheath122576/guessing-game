const colors = ["blue", "red", "orange", "green", "yellow"];
const cards = document.querySelectorAll(".card");
const resetButton =document.querySelector(".reset");
const scoreSpan = document.querySelector(".score");

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

setInterval(() => {
    let color1 = cards[0].style.backgroundColor;
    let color2 = cards[1].style.backgroundColor;
    let color3 = cards[2].style.backgroundColor;
    if (color1 === "" || color2 === "" || color3 === "") return false;
    if (color1 !== "" && color1 === color2 && color1 === color3) {
        scoreSpan.innerText = "500";
    } else if (color1 !=="" && (color1 === color2 || color1 === color3)) {
        scoreSpan.innerText = "200";
    } else if (color2 !== "" && color2 === color3) {
        scoreSpan.innerText = "200";
    }
}, 100);

