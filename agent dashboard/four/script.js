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
// REFRESH DASHBOARD
// ==============================

function refreshDashboard() {

    const button =
        document.querySelector(".refresh-btn");

    const agentCount =
        document.getElementById("agentCount");

    const taskCount =
        document.getElementById("taskCount");


    button.textContent =
        "↻ UPDATING...";

    button.style.opacity =
        "0.6";


    setTimeout(function() {

        let agents =
            Number(agentCount.textContent);

        let tasks =
            Number(taskCount.textContent);


        agentCount.textContent =
            agents;

        taskCount.textContent =
            tasks + 1;


        button.textContent =
            "✓ UPDATED";

        button.style.opacity =
            "1";


        setTimeout(function() {

            button.textContent =
                "↻ REFRESH";

        }, 1200);

    }, 700);

}


// ==============================
// SIDEBAR ACTIVE ITEM
// ==============================

const sideLinks =
    document.querySelectorAll(".side-link");

sideLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        sideLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


// ==============================
// CARD ANIMATION
// ==============================

const cards =
    document.querySelectorAll(
        ".stat-card, .panel"
    );

cards.forEach(function(card, index) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(12px)";


    setTimeout(function() {

        card.style.transition =
            "opacity .5s ease, transform .5s ease";

        card.style.opacity =
            "1";

        card.style.transform =
            "translateY(0)";

    }, index * 80);

});