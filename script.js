/* =========================================
   START MISSION
========================================= */

function startMission() {

    const mission = document.getElementById("mission");

    if (mission) {

        mission.scrollIntoView({
            behavior: "smooth"
        });

    }

}



/* =========================================
   FLOATING HEARTS + STARS
========================================= */

const symbols = [
    "❤️",
    "💗",
    "💕",
    "✨",
    "🌸",
    "⭐"
];


function createFloatingItem() {

    const item =
        document.createElement("div");

    item.classList.add(
        "floating-item"
    );


    item.innerHTML =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    item.style.left =
        Math.random() * 100 + "vw";


    item.style.fontSize =
        (14 + Math.random() * 20)
        + "px";


    item.style.animationDuration =
        (6 + Math.random() * 6)
        + "s";


    document.body.appendChild(item);


    setTimeout(() => {

        item.remove();

    }, 12000);

}
/* =========================================
   FINAL BOSS BUTTON
========================================= */

function acceptBossBattle() {

    const message =
        document.getElementById("battleMessage");

    if (message) {

        message.style.display = "block";

    }

}

setInterval(
    createFloatingItem,
    600
);
/* =========================================
   PAGE 4 — REVEAL FUTURE
========================================= */

function revealPredictions() {

    const prediction =
        document.getElementById("finalPrediction");

    if (prediction) {

        prediction.style.display = "block";

        prediction.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}
/* =========================================
   PAGE 5 — FINAL STATISTICS
========================================= */

function showFinalStats() {

    const stats =
        document.getElementById("finalStats");

    if (stats) {

        stats.style.display = "block";

        stats.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}
/* =========================================
   PAGE 6 — OPEN LETTER
========================================= */

function openLetter() {

    const letter =
        document.getElementById("letterCard");

    if (letter) {

        letter.style.display = "block";

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}
