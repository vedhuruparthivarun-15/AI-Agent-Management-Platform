// ===============================
// CURSOR GLOW
// ===============================

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function (event) {

    cursorGlow.style.left =
        event.clientX + "px";

    cursorGlow.style.top =
        event.clientY + "px";

});


// ===============================
// AGENT DATA
// ===============================

const agents = [
    {
        name: "Agent Alpha",
        status: "online"
    },
    {
        name: "Agent Beta",
        status: "busy"
    },
    {
        name: "Agent Gamma",
        status: "error"
    },
    {
        name: "Agent Delta",
        status: "offline"
    },
    {
        name: "Agent Sigma",
        status: "online"
    },
    {
        name: "Agent Omega",
        status: "busy"
    }
];


// ===============================
// STATUS COLORS
// ===============================

const colors = {

    online: "#55df9b",

    busy: "#ffc857",

    offline: "#ff5368",

    error: "#ff9d52"

};


// ===============================
// UPDATE CLOCK
// ===============================

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString(
            "en-US",
            {
                hour12: false
            }
        );

    document.getElementById(
        "currentTime"
    ).textContent = time;

}

setInterval(updateClock, 1000);

updateClock();


// ===============================
// UPDATE COUNTERS
// ===============================

function updateCounters() {

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


    document.getElementById(
        "onlineCount"
    ).textContent = online;

    document.getElementById(
        "busyCount"
    ).textContent = busy;

    document.getElementById(
        "offlineCount"
    ).textContent = offline;

    document.getElementById(
        "errorCount"
    ).textContent = error;


    const total =
        online + busy + offline + error;

    document.getElementById(
        "totalCount"
    ).textContent = total;


    // Health calculation

    const health =
        Math.round(
            ((online + busy) / total) * 100
        );

    document.getElementById(
        "healthScore"
    ).textContent = health + "%";

    document.getElementById(
        "healthBar"
    ).style.width = health + "%";

}


// ===============================
// UPDATE TABLE STATUS
// ===============================

function updateTable() {

    const rows =
        document.querySelectorAll(".agent-row");


    rows.forEach(function (row, index) {

        const agent =
            agents[index];

        const statusElement =
            row.querySelector(".status");

        if (!statusElement) {
            return;
        }


        statusElement.className =
            "status " + agent.status;


        if (agent.status === "online") {

            statusElement.innerHTML =
                "<i></i> ONLINE";

        }


        if (agent.status === "busy") {

            statusElement.innerHTML =
                "<i></i> BUSY";

        }


        if (agent.status === "offline") {

            statusElement.innerHTML =
                "<i></i> OFFLINE";

        }


        if (agent.status === "error") {

            statusElement.innerHTML =
                "<i>!</i> ERROR";

        }

    });

}


// ===============================
// ADD LIVE EVENT
// ===============================

function addActivity(agent, status) {

    const feed =
        document.getElementById(
            "activityFeed"
        );


    const item =
        document.createElement("div");

    item.className =
        "feed-item";


    const colorClass =
        status === "online"
            ? "green"
            : status === "busy"
            ? "yellow"
            : status === "offline"
            ? "red"
            : "orange";


    const statusText =
        status.toUpperCase();


    item.innerHTML = `

        <span class="feed-dot ${colorClass}"></span>

        <div>

            <strong>
                ${agent.name} ${statusText}
            </strong>

            <small>
                Just now
            </small>

        </div>

    `;


    feed.prepend(item);


    // Keep only latest 5 events

    while (feed.children.length > 5) {

        feed.removeChild(
            feed.lastElementChild
        );

    }

}


// ===============================
// SET MANUAL STATUS
// ===============================

function setStatus(status) {

    const select =
        document.getElementById(
            "agentSelect"
        );


    const index =
        parseInt(select.value);


    const agent =
        agents[index];


    agent.status = status;


    updateTable();

    updateCounters();

    addActivity(
        agent,
        status
    );

}


// ===============================
// REFRESH
// ===============================

function refreshStatus() {

    const button =
        document.querySelector(
            ".refresh-button"
        );


    button.textContent =
        "↻ Updating...";


    button.disabled = true;


    setTimeout(function () {

        updateTable();

        updateCounters();

        button.textContent =
            "✓ Updated";


        setTimeout(function () {

            button.textContent =
                "↻ Refresh";

            button.disabled = false;

        }, 1000);

    }, 700);

}


// ===============================
// AUTOMATIC STATUS SIMULATION
// ===============================

function simulateStatus() {

    const index =
        Math.floor(
            Math.random() * agents.length
        );


    const possibleStatuses = [

        "online",
        "online",
        "busy",
        "busy",
        "offline",
        "error"

    ];


    const randomStatus =
        possibleStatuses[
            Math.floor(
                Math.random() *
                possibleStatuses.length
            )
        ];


    const agent =
        agents[index];


    agent.status =
        randomStatus;


    updateTable();

    updateCounters();

    addActivity(
        agent,
        randomStatus
    );

}


// Change a random agent every 10 seconds

setInterval(
    simulateStatus,
    10000
);


// ===============================
// INITIAL LOAD
// ===============================

updateTable();

updateCounters();