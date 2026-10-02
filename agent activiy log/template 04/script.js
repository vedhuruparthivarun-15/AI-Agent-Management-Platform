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
// HEATMAP INTERACTION
// ==============================

const cells =
    document.querySelectorAll(".cell");

cells.forEach(function(cell) {

    cell.addEventListener("click", function() {

        const current =
            cell.classList.contains("selected");

        cells.forEach(function(item) {

            item.classList.remove("selected");

        });

        if (!current) {

            cell.classList.add("selected");

        }

    });

});


// ==============================
// REFRESH CHART
// ==============================

function refreshChart() {

    const button =
        document.querySelector(
            ".hourly-panel button"
        );

    const total =
        document.getElementById("totalEvents");


    button.textContent =
        "↻ UPDATING...";

    button.style.opacity =
        "0.6";


    setTimeout(function() {

        let value =
            Number(
                total.textContent.replace(",", "")
            );

        value += 1;

        total.textContent =
            value.toLocaleString();


        button.textContent =
            "✓ UPDATED";

        button.style.opacity =
            "1";


        animateBars();


        setTimeout(function() {

            button.textContent =
                "↻ REFRESH";

        }, 1200);

    }, 700);

}


// ==============================
// CHART ANIMATION
// ==============================

function animateBars() {

    const bars =
        document.querySelectorAll(".chart-bar");

    bars.forEach(function(bar, index) {

        const original =
            bar.style.height;

        bar.style.height =
            "0%";


        setTimeout(function() {

            bar.style.height =
                original;

        }, index * 70);

    });

}


// ==============================
// INITIAL ANIMATION
// ==============================

window.addEventListener("load", function() {

    const items =
        document.querySelectorAll(
            ".kpi, .insight, .panel"
        );

    items.forEach(function(item, index) {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(15px)";


        setTimeout(function() {

            item.style.transition =
                "opacity .5s ease, transform .5s ease";

            item.style.opacity =
                "1";

            item.style.transform =
                "translateY(0)";

        }, index * 80);

    });

});