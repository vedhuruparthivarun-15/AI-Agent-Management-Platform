// ==============================
// CURSOR GLOW
// ==============================

const glow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(event) {

    if (!glow) return;

    glow.style.left =
        `${event.clientX - 225}px`;

    glow.style.top =
        `${event.clientY - 225}px`;

});


// ==============================
// LIVE CLOCK
// ==============================

function updateClock() {

    const clock =
        document.getElementById("currentTime");

    if (!clock) return;

    const now =
        new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");

    clock.textContent =
        `${hours}:${minutes}:${seconds}`;

}

setInterval(updateClock, 1000);

updateClock();


// ==============================
// REFRESH AGENTS
// ==============================

function refreshAgents() {

    const button =
        document.querySelector(
            ".deployments button"
        );

    button.style.transform =
        "rotate(180deg)";

    button.textContent =
        "↻";


    setTimeout(function() {

        button.style.transform =
            "rotate(360deg)";

    }, 300);


    setTimeout(function() {

        button.style.transform =
            "rotate(0deg)";

    }, 600);

}


// ==============================
// DEPLOYMENT ANIMATION
// ==============================

const deployments =
    document.querySelectorAll(
        ".deployment"
    );

deployments.forEach(function(item, index) {

    item.style.opacity = "0";

    item.style.transform =
        "translateX(-12px)";


    setTimeout(function() {

        item.style.transition =
            "opacity .5s ease, transform .5s ease";

        item.style.opacity =
            "1";

        item.style.transform =
            "translateX(0)";

    }, index * 120);

});


// ==============================
// TASK CARD HOVER
// ==============================

const taskCards =
    document.querySelectorAll(
        ".task-card"
    );

taskCards.forEach(function(card) {

    card.addEventListener(
        "mouseenter",
        function() {

            card.style.borderColor =
                "rgba(117,101,255,.4)";

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.borderColor =
                "";

        }
    );

});