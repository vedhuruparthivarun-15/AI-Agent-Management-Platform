/* =====================================================
   AGENTFLOW - STATUS COMMAND RADAR
===================================================== */


/* ================= CURSOR GLOW ================= */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function (event) {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


/* ================= LIVE CLOCK ================= */

const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent =
        `${hours}:${minutes}:${seconds}`;

}

updateClock();

setInterval(updateClock, 1000);


/* =====================================================
   AGENT DATA
===================================================== */

const agents = [

    {
        name: "Agent Alpha",
        status: "ONLINE"
    },

    {
        name: "Agent Beta",
        status: "BUSY"
    },

    {
        name: "Agent Gamma",
        status: "ERROR"
    },

    {
        name: "Agent Delta",
        status: "ONLINE"
    },

    {
        name: "Agent Sigma",
        status: "BUSY"
    },

    {
        name: "Agent Omega",
        status: "OFFLINE"
    },

    {
        name: "Agent Nova",
        status: "ONLINE"
    }

];


/* =====================================================
   UPDATE COUNTERS
===================================================== */

function updateCounters() {

    let online = 0;
    let busy = 0;
    let offline = 0;
    let error = 0;

    agents.forEach(agent => {

        if (agent.status === "ONLINE") {
            online++;
        }

        if (agent.status === "BUSY") {
            busy++;
        }

        if (agent.status === "OFFLINE") {
            offline++;
        }

        if (agent.status === "ERROR") {
            error++;
        }

    });


    document.getElementById("onlineCount").textContent = online;

    document.getElementById("busyCount").textContent = busy;

    document.getElementById("offlineCount").textContent = offline;

    document.getElementById("errorCount").textContent = error;


    const total = agents.length;

    const healthy =
        online + busy;

    const health =
        Math.round((healthy / total) * 100);

    document.getElementById("healthValue").textContent =
        health + "%";

    document.getElementById("healthBar").style.width =
        health + "%";


    if (error > 0) {

        document.getElementById("coreStatus").textContent =
            "ALERT";

        document.getElementById("coreStatus").style.color =
            "#ff5368";

    } else {

        document.getElementById("coreStatus").textContent =
            "ONLINE";

        document.getElementById("coreStatus").style.color =
            "#55df9b";

    }

}


/* =====================================================
   RADAR NODE TOOLTIP
===================================================== */

const nodes =
    document.querySelectorAll(".agent-node");

const tooltip =
    document.getElementById("radarTooltip");

const tooltipName =
    document.getElementById("tooltipName");

const tooltipStatus =
    document.getElementById("tooltipStatus");


nodes.forEach(node => {

    node.addEventListener("mouseenter", function () {

        tooltipName.textContent =
            node.dataset.name;

        tooltipStatus.textContent =
            node.dataset.status;

        tooltip.classList.add("visible");


        const radar =
            document.querySelector(".radar");

        const radarRect =
            radar.getBoundingClientRect();

        const nodeRect =
            node.getBoundingClientRect();


        let left =
            nodeRect.left -
            radarRect.left +
            35;

        let top =
            nodeRect.top -
            radarRect.top -
            5;


        tooltip.style.left =
            left + "px";

        tooltip.style.top =
            top + "px";


        if (node.dataset.status === "ERROR") {

            tooltipStatus.style.color =
                "#ff5368";

        } else if (node.dataset.status === "BUSY") {

            tooltipStatus.style.color =
                "#f5c451";

        } else if (node.dataset.status === "OFFLINE") {

            tooltipStatus.style.color =
                "#ff5368";

        } else {

            tooltipStatus.style.color =
                "#55df9b";

        }

    });


    node.addEventListener("mouseleave", function () {

        tooltip.classList.remove("visible");

    });


    node.addEventListener("click", function () {

        nodes.forEach(item => {

            item.style.boxShadow = "";

        });


        node.style.transform =
            "scale(1.25)";

        node.style.boxShadow =
            "0 0 30px rgba(118,103,255,.5)";


        setTimeout(() => {

            node.style.transform =
                "";

            node.style.boxShadow =
                "";

        }, 1200);

    });

});


/* =====================================================
   NETWORK SCAN
===================================================== */

const scanBtn =
    document.getElementById("scanBtn");

scanBtn.addEventListener("click", function () {

    scanBtn.textContent =
        "◌ SCANNING...";

    scanBtn.disabled = true;


    nodes.forEach((node, index) => {

        setTimeout(() => {

            node.style.transform =
                "scale(1.25)";

            setTimeout(() => {

                node.style.transform =
                    "";

            }, 300);

        }, index * 150);

    });


    setTimeout(() => {

        scanBtn.textContent =
            "✓ NETWORK SCANNED";

        scanBtn.disabled = false;

    }, 1500);


    setTimeout(() => {

        scanBtn.textContent =
            "⟳ SCAN NETWORK";

    }, 3000);

});


/* =====================================================
   REFRESH AGENTS
===================================================== */

const refreshAgents =
    document.getElementById("refreshAgents");

refreshAgents.addEventListener("click", function () {

    refreshAgents.textContent =
        "↻ Refreshing...";

    refreshAgents.disabled = true;


    nodes.forEach(node => {

        node.style.opacity = "0.35";

    });


    setTimeout(() => {

        nodes.forEach(node => {

            node.style.opacity = "1";

        });


        updateCounters();

        refreshAgents.textContent =
            "✓ Agents Refreshed";

        refreshAgents.disabled = false;

    }, 1200);


    setTimeout(() => {

        refreshAgents.textContent =
            "↻ Refresh Agents";

    }, 2800);

});


/* =====================================================
   PULSE NETWORK
===================================================== */

const pulseNetwork =
    document.getElementById("pulseNetwork");

pulseNetwork.addEventListener("click", function () {

    nodes.forEach((node, index) => {

        setTimeout(() => {

            node.style.boxShadow =
                "0 0 35px rgba(118,103,255,.8)";

            node.style.transform =
                "scale(1.2)";

            setTimeout(() => {

                node.style.boxShadow =
                    "";

                node.style.transform =
                    "";

            }, 350);

        }, index * 120);

    });

});


/* =====================================================
   ISOLATE ERRORS
===================================================== */

const isolateBtn =
    document.getElementById("isolateBtn");

isolateBtn.addEventListener("click", function () {

    nodes.forEach(node => {

        if (node.dataset.status === "ERROR") {

            node.style.transform =
                "scale(1.3)";

            node.style.boxShadow =
                "0 0 40px rgba(255,83,104,.7)";

        } else {

            node.style.opacity =
                "0.3";

        }

    });


    isolateBtn.textContent =
        "⚠ ERROR ISOLATED";


    setTimeout(() => {

        nodes.forEach(node => {

            node.style.opacity =
                "1";

            node.style.transform =
                "";

            node.style.boxShadow =
                "";

        });

        isolateBtn.textContent =
            "⊘ Isolate Errors";

    }, 2500);

});


/* =====================================================
   NETWORK LOG
===================================================== */

const detailsBtn =
    document.getElementById("detailsBtn");

detailsBtn.addEventListener("click", function () {

    detailsBtn.innerHTML =
        "NETWORK LOG ACTIVE <span>✓</span>";

    setTimeout(() => {

        detailsBtn.innerHTML =
            "VIEW NETWORK LOG <span>→</span>";

    }, 1800);

});


/* =====================================================
   SIMULATE STATUS CHANGES
===================================================== */

function simulateStatus() {

    const randomIndex =
        Math.floor(Math.random() * agents.length);

    const statuses = [
        "ONLINE",
        "BUSY",
        "ONLINE",
        "ONLINE",
        "BUSY",
        "OFFLINE"
    ];

    const newStatus =
        statuses[
            Math.floor(
                Math.random() * statuses.length
            )
        ];


    agents[randomIndex].status =
        newStatus;


    const node =
        nodes[randomIndex];


    if (node) {

        node.dataset.status =
            newStatus;


        node.classList.remove(
            "online",
            "busy",
            "offline",
            "error"
        );


        node.classList.add(
            newStatus.toLowerCase()
        );


        const statusColors = {

            ONLINE: "#55df9b",

            BUSY: "#f5c451",

            OFFLINE: "#ff5368",

            ERROR: "#ff5368"

        };


        node.style.color =
            statusColors[newStatus];

    }


    updateCounters();

}


/* Change a random status every 8 seconds */

setInterval(
    simulateStatus,
    8000
);


/* Initial */

updateCounters();