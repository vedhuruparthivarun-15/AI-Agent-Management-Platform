// ==============================
// CURSOR GLOW
// ==============================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(event) {

    if (!glow) return;

    glow.style.left =
        `${event.clientX - 225}px`;

    glow.style.top =
        `${event.clientY - 225}px`;

});


// ==============================
// REFRESH AGENTS
// ==============================

function refreshAgents() {

    const button =
        document.querySelector(".section-heading button");

    button.textContent = "↻ REFRESHING...";

    button.style.opacity = "0.6";

    setTimeout(function() {

        button.textContent = "✓ UPDATED";

        button.style.opacity = "1";

        setTimeout(function() {

            button.textContent = "↻ REFRESH";

        }, 1200);

    }, 800);

}


// ==============================
// AGENT CARD ANIMATION
// ==============================

const cards =
    document.querySelectorAll(".agent-card");

cards.forEach(function(card, index) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px)";

    setTimeout(function() {

        card.style.transition =
            "opacity .5s ease, transform .5s ease";

        card.style.opacity = "1";

        card.style.transform =
            "translateY(0)";

    }, index * 150);

});


// ==============================
// PROGRESS BAR ANIMATION
// ==============================

window.addEventListener("load", function() {

    const bars =
        document.querySelectorAll(".progress-fill");

    bars.forEach(function(bar) {

        const width =
            bar.style.width;

        bar.style.width = "0%";

        setTimeout(function() {

            bar.style.width = width;

        }, 400);

    });

});