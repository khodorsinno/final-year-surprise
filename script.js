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


setInterval(
    createFloatingItem,
    600
);
