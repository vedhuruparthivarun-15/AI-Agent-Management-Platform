const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";

    });

}


/* REFRESH DATA */

function refreshData() {

    const button =
        document.querySelector(".secondary-btn");

    if (!button) return;

    button.innerHTML = "↻ Refreshing...";

    setTimeout(() => {

        button.innerHTML = "✓ Data Updated";

        setTimeout(() => {

            button.innerHTML = "↻ Refresh Data";

        }, 1500);

    }, 900);

}


/* PERIOD SELECT */

const periodSelect =
    document.getElementById("periodSelect");

if (periodSelect) {

    periodSelect.addEventListener("change", () => {

        const performance =
            document.querySelector(".big-number strong");

        if (!performance) return;

        if (
            periodSelect.value ===
            "Last 7 Days"
        ) {

            performance.textContent = "98.4%";

        }

        if (
            periodSelect.value ===
            "Last 30 Days"
        ) {

            performance.textContent = "97.8%";

        }

        if (
            periodSelect.value ===
            "Last 90 Days"
        ) {

            performance.textContent = "96.9%";

        }

    });

}


/* AGENT ROW HOVER */

document
    .querySelectorAll(".agent-row")
    .forEach(row => {

        row.addEventListener(
            "mouseenter",
            () => {

                row.style.background =
                    "rgba(118,103,255,.045)";

            }
        );

        row.addEventListener(
            "mouseleave",
            () => {

                row.style.background =
                    "transparent";

            }
        );

    });


/* LIVE SIGNAL ANIMATION */

const signals =
    document.querySelectorAll(".signal");

signals.forEach((signal, index) => {

    signal.style.opacity = "0";

    setTimeout(() => {

        signal.style.transition =
            "opacity .5s ease";

        signal.style.opacity = "1";

    }, index * 180);

});


/* KPI NUMBER ANIMATION */

document
    .querySelectorAll(".kpi strong")
    .forEach(element => {

        element.style.transition =
            "transform .2s ease";

        element.addEventListener(
            "mouseenter",
            () => {

                element.style.transform =
                    "scale(1.06)";

            }
        );

        element.addEventListener(
            "mouseleave",
            () => {

                element.style.transform =
                    "scale(1)";

            }
        );

    });