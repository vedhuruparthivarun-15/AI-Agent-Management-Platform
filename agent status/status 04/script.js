/* ================= CURSOR GLOW ================= */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* ================= CLOCK ================= */

const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${h}:${m}:${s}`;

}

updateClock();

setInterval(updateClock, 1000);


/* ================= STATUS SCAN ================= */

const scanButton =
    document.getElementById("scanButton");

const agents =
    document.querySelectorAll(".pipeline-agent");

scanButton.addEventListener("click", () => {

    scanButton.textContent = "SCANNING...";

    scanButton.disabled = true;

    agents.forEach((agent, index) => {

        setTimeout(() => {

            agent.style.background =
                "rgba(118,103,255,.10)";

            agent.style.transform =
                "translateX(6px)";

            setTimeout(() => {

                agent.style.background = "";
                agent.style.transform = "";

            }, 250);

        }, index * 130);

    });


    setTimeout(() => {

        scanButton.textContent =
            "✓ SCAN COMPLETE";

    }, 1100);


    setTimeout(() => {

        scanButton.textContent =
            "RUN STATUS SCAN";

        scanButton.disabled = false;

    }, 2600);

});


/* ================= AGENT HOVER ================= */

agents.forEach(agent => {

    agent.addEventListener("mouseenter", () => {

        agent.style.zIndex = "5";

    });

    agent.addEventListener("mouseleave", () => {

        agent.style.zIndex = "";

    });

});


/* ================= LIVE ACTIVITY ================= */

const activityStream =
    document.getElementById("activityStream");

const activityData = [

    [
        "Agent Nova",
        "Heartbeat received"
    ],

    [
        "Agent Delta",
        "Workflow synchronization completed"
    ],

    [
        "Agent Alpha",
        "New processing task assigned"
    ],

    [
        "Agent Sigma",
        "Analytics pipeline updated"
    ]

];


function addActivity() {

    const random =
        activityData[
            Math.floor(
                Math.random() * activityData.length
            )
        ];

    const currentTime =
        new Date().toLocaleTimeString(
            "en-GB"
        );


    const item =
        document.createElement("div");

    item.className =
        "activity-item";

    item.innerHTML = `

        <time>
            ${currentTime}
        </time>

        <div class="activity-marker online"></div>

        <div>

            <strong>
                ${random[0]}
            </strong>

            <p>
                ${random[1]}
            </p>

        </div>

    `;


    activityStream.prepend(item);


    const items =
        activityStream.querySelectorAll(
            ".activity-item"
        );


    if (items.length > 6) {

        items[items.length - 1].remove();

    }

}


/* New activity every 7 seconds */

setInterval(addActivity, 7000);


/* ================= PIPELINE STATUS SIMULATION ================= */

function simulateStatus() {

    const randomAgent =
        agents[
            Math.floor(
                Math.random() * agents.length
            )
        ];


    const statuses = [
        "online",
        "online",
        "busy",
        "online"
    ];


    const newStatus =
        statuses[
            Math.floor(
                Math.random() * statuses.length
            )
        ];


    randomAgent.classList.remove(
        "online",
        "busy",
        "error",
        "offline"
    );


    randomAgent.classList.add(
        newStatus
    );


    randomAgent.dataset.status =
        newStatus;

}


/* Change an agent state periodically */

setInterval(
    simulateStatus,
    9000
);


/* ================= INITIAL ANIMATION ================= */

window.addEventListener("load", () => {

    document
        .querySelectorAll(".pipeline-agent")
        .forEach((agent, index) => {

            agent.style.opacity = "0";
            agent.style.transform =
                "translateY(10px)";

            setTimeout(() => {

                agent.style.transition =
                    "opacity .4s ease, transform .4s ease";

                agent.style.opacity = "1";
                agent.style.transform =
                    "translateY(0)";

            }, index * 100);

        });

});