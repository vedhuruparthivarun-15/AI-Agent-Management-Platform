// ============================
// REFRESH ACTIVITY
// ============================

function refreshActivity() {

    const button =
        document.querySelector(".activity-header button");

    const eventCount =
        document.getElementById("totalEvents");

    if (!button) return;


    button.textContent = "Updating...";

    button.disabled = true;


    setTimeout(() => {

        if (eventCount) {

            let value =
                Number(eventCount.textContent);

            value += 1;

            eventCount.textContent =
                value;

        }


        button.textContent =
            "✓ Updated";

        button.disabled = false;


        setTimeout(() => {

            button.textContent =
                "↻ Refresh";

        }, 1000);


    }, 700);

}


// ============================
// EVENT CARD ANIMATION
// ============================

const events =
    document.querySelectorAll(".event-card");


events.forEach((event, index) => {

    event.style.opacity = "0";

    event.style.transform =
        "translateY(15px)";


    setTimeout(() => {

        event.style.transition =
            "opacity .5s ease, transform .5s ease";

        event.style.opacity = "1";

        event.style.transform =
            "translateY(0)";

    }, index * 120);

});


// ============================
// LIVE ACTIVITY
// ============================

setInterval(() => {

    const eventCount =
        document.getElementById("totalEvents");

    if (!eventCount) return;

    let value =
        Number(eventCount.textContent);

    value++;

    eventCount.textContent =
        value;

}, 10000);