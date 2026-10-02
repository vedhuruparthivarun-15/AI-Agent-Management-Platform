const cursorGlow = document.querySelector(".cursor-glow");


// ===============================
// CURSOR GLOW
// ===============================

document.addEventListener("mousemove", function (event) {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


// ===============================
// AGENT DATA
// ===============================

const agents = [
    {
        id: "alpha",
        name: "Agent Alpha",
        status: "online"
    },
    {
        id: "beta",
        name: "Agent Beta",
        status: "busy"
    },
    {
        id: "gamma",
        name: "Agent Gamma",
        status: "error"
    },
    {
        id: "delta",
        name: "Agent Delta",
        status: "offline"
    },
    {
        id: "sigma",
        name: "Agent Sigma",
        status: "online"
    },
    {
        id: "omega",
        name: "Agent Omega",
        status: "busy"
    }
];


// ===============================
// STATUS NAMES
// ===============================

const statusNames = {
    online: "ONLINE",
    busy: "BUSY",
    offline: "OFFLINE",
    error: "ERROR"
};


// ===============================
// UPDATE SUMMARY
// ===============================

function updateSummary() {

    let online = 0;
    let busy = 0;
    let offline = 0;
    let error = 0;

    agents.forEach(function (agent) {

        if (agent.status === "online") {
            online++;
        }

        if (agent.status === "busy") {
            busy++;
        }

        if (agent.status === "offline") {
            offline++;
        }

        if (agent.status === "error") {
            error++;
        }

    });


    document.getElementById("onlineCount").textContent = online;
    document.getElementById("busyCount").textContent = busy;
    document.getElementById("offlineCount").textContent = offline;
    document.getElementById("errorCount").textContent = error;

}


// ===============================
// UPDATE AGENT CARD
// ===============================

function updateCard(agent) {

    const card = document.querySelector(
        `[data-agent="${agent.id}"]`
    );

    if (!card) {
        return;
    }


    // Change data status

    card.dataset.status = agent.status;


    // Status badge

    const badge = card.querySelector(".status-badge");

    badge.className = "status-badge " + agent.status;


    // Status text

    const statusText = card.querySelector(".status-text");

    statusText.textContent = statusNames[agent.status];


    // Status icon

    const statusIcon = badge.querySelector("i");


    if (agent.status === "error") {

        statusIcon.textContent = "⚠";

    } else {

        statusIcon.textContent = "";

    }


    // Status footer dot

    const dot = card.querySelector(".agent-dot");

    dot.style.background = getStatusColor(agent.status);

    dot.style.boxShadow =
        "0 0 8px " + getStatusColor(agent.status);

}


// ===============================
// STATUS COLOR
// ===============================

function getStatusColor(status) {

    if (status === "online") {
        return "#55df9b";
    }

    if (status === "busy") {
        return "#ffc857";
    }

    if (status === "offline") {
        return "#ff5368";
    }

    if (status === "error") {
        return "#ff9d52";
    }

    return "#7667ff";
}


// ===============================
// APPLY ALL STATUSES
// ===============================

function updateAllCards() {

    agents.forEach(function (agent) {
        updateCard(agent);
    });

    updateSummary();

    updateLastUpdate();

}


// ===============================
// LAST UPDATE
// ===============================

function updateLastUpdate() {

    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("lastUpdate").textContent = time;

}


// ===============================
// REFRESH BUTTON
// ===============================

function refreshStatuses() {

    const button = document.querySelector(".refresh-btn");

    button.textContent = "↻ Updating...";

    button.disabled = true;


    setTimeout(function () {

        updateAllCards();

        button.textContent = "✓ Updated";

        setTimeout(function () {

            button.textContent = "↻ Refresh";

            button.disabled = false;

        }, 1000);

    }, 700);

}


// ===============================
// FILTER SYSTEM
// ===============================

const filters = document.querySelectorAll(".filter");

filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        // Remove active class

        filters.forEach(function (item) {
            item.classList.remove("active-filter");
        });

        // Add active class

        filter.classList.add("active-filter");


        const selectedStatus =
            filter.dataset.filter;


        const cards =
            document.querySelectorAll(".agent-card");


        cards.forEach(function (card) {

            if (
                selectedStatus === "all" ||
                card.dataset.status === selectedStatus
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ===============================
// SIMULATE RANDOM STATUS CHANGE
// ===============================

function simulateStatusChange() {

    const randomIndex =
        Math.floor(Math.random() * agents.length);


    const agent = agents[randomIndex];


    const statuses = [
        "online",
        "busy",
        "online",
        "busy",
        "offline",
        "error"
    ];


    const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];


    agent.status = randomStatus;


    updateCard(agent);

    updateSummary();

    updateLastUpdate();

}


// ===============================
// INITIAL LOAD
// ===============================

updateAllCards();


// ===============================
// AUTO SIMULATION
// ===============================
//
// Changes one agent status every 8 seconds.
//

setInterval(function () {

    simulateStatusChange();

}, 8000);