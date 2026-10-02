// ==============================
// ACTIVITY FILTER
// ==============================

function filterActivity(type, button) {

    const cards =
        document.querySelectorAll(".activity-card");

    const filters =
        document.querySelectorAll(".filter");


    filters.forEach(filter => {

        filter.classList.remove("active");

    });

    button.classList.add("active");


    cards.forEach(card => {

        const status =
            card.getAttribute("data-status");


        if (type === "all") {

            card.style.display = "grid";

        }

        else if (status === type) {

            card.style.display = "grid";

        }

        else {

            card.style.display = "none";

        }

    });

}


// ==============================
// REFRESH ACTIVITY
// ==============================

function refreshActivity() {

    const button =
        document.querySelector(".refresh");

    const counter =
        document.getElementById("eventCounter");

    const eventsToday =
        document.getElementById("eventsToday");


    button.textContent = "↻";

    button.style.transform =
        "rotate(180deg)";


    setTimeout(() => {

        let value =
            Number(counter.textContent);

        value++;

        counter.textContent =
            value;


        let today =
            Number(eventsToday.textContent);

        today++;

        eventsToday.textContent =
            today;


        button.style.transform =
            "rotate(360deg)";


        setTimeout(() => {

            button.style.transform =
                "rotate(0deg)";

        }, 300);

    }, 600);

}


// ==============================
// MOUSE GLOW
// ==============================

const glow =
    document.querySelector(".cursor-glow");


document.addEventListener(
    "mousemove",
    event => {

        if (!glow) return;

        glow.style.left =
            `${event.clientX - 225}px`;

        glow.style.top =
            `${event.clientY - 225}px`;

    }
);


// ==============================
// CARD REVEAL
// ==============================

const cards =
    document.querySelectorAll(".activity-card");


cards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(15px)";


    setTimeout(() => {

        card.style.transition =
            "opacity .5s ease, transform .5s ease";

        card.style.opacity = "1";

        card.style.transform =
            "translateY(0)";

    }, index * 100);

});