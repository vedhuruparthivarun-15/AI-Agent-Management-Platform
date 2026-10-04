const STORAGE_KEY = "aiAgentManagementData";

const defaultAgents = [
    {
        id: "A001",
        name: "Customer Support",
        type: "Chatbot",
        description: "Answers customer questions and provides support.",
        status: "Active",
        permissions: ["Read Data", "Execute Tasks"]
    },
    {
        id: "A002",
        name: "Data Analyst",
        type: "Analytics",
        description: "Analyzes data and prepares reports.",
        status: "Active",
        permissions: ["Read Data", "Write Data"]
    },
    {
        id: "A003",
        name: "Email Assistant",
        type: "Automation",
        description: "Helps automate email-related tasks.",
        status: "Inactive",
        permissions: ["Read Data"]
    }
];

let agents;

try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    agents = savedData ? JSON.parse(savedData) : defaultAgents;

    if (!Array.isArray(agents)) {
        agents = defaultAgents;
    }
} catch {
    agents = defaultAgents;
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(agents));
}

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function createId() {
    let maxId = agents.reduce((max, agent) => {
        const number = Number(agent.id.replace(/\D/g, ""));
        return Math.max(max, number || 0);
    }, 0);

    return "A" + String(maxId + 1).padStart(3, "0");
}

/* Navigation between the four templates */
document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".nav-btn").forEach(item =>
            item.classList.remove("active")
        );

        document.querySelectorAll(".page").forEach(page =>
            page.classList.remove("active")
        );

        button.classList.add("active");
        document.getElementById(button.dataset.page)
            .classList.add("active");
    });
});

/* Agent list */
function renderAgents() {
    const tbody = document.getElementById("agentTableBody");
    const search = document.getElementById("searchInput")
        .value.toLowerCase();

    const filteredAgents = agents.filter(agent =>
        [agent.id, agent.name, agent.type, agent.status]
            .some(value => value.toLowerCase().includes(search))
    );

    tbody.innerHTML = filteredAgents.length
        ? filteredAgents.map(agent => `
            <tr>
                <td>${escapeHTML(agent.id)}</td>
                <td>${escapeHTML(agent.name)}</td>
                <td>${escapeHTML(agent.type)}</td>
                <td>
                    <span class="status ${agent.status === "Active" ? "active" : "inactive"
            }">${escapeHTML(agent.status)}</span>
                </td>
                <td>
                    <button class="action-btn view-btn"
                        data-action="view" data-id="${escapeHTML(agent.id)}">
                        View
                    </button>
                    <button class="action-btn edit-btn"
                        data-action="edit" data-id="${escapeHTML(agent.id)}">
                        Edit
                    </button>
                    <button class="action-btn delete-btn"
                        data-action="delete" data-id="${escapeHTML(agent.id)}">
                        Delete
                    </button>
                </td>
            </tr>
        `).join("")
        : `<tr><td colspan="5">No agents found.</td></tr>`;

    document.getElementById("totalAgents").textContent = agents.length;
    document.getElementById("activeAgents").textContent =
        agents.filter(agent => agent.status === "Active").length;
    document.getElementById("inactiveAgents").textContent =
        agents.filter(agent => agent.status === "Inactive").length;

    refreshSelects();
}

document.getElementById("searchInput")
    .addEventListener("input", renderAgents);

document.getElementById("addAgentBtn").addEventListener("click", () => {
    resetAgentForm();
    document.getElementById("agentForm").classList.remove("hidden");
    document.getElementById("formTitle").textContent = "Add New Agent";
});

document.getElementById("cancelBtn").addEventListener("click", () => {
    document.getElementById("agentForm").classList.add("hidden");
    resetAgentForm();
});

function resetAgentForm() {
    document.getElementById("agentForm").reset();
    document.getElementById("editId").value = "";
}

document.getElementById("agentForm")
    .addEventListener("submit", event => {
        event.preventDefault();

        const editId = document.getElementById("editId").value;
        const name = document.getElementById("agentName").value.trim();

        if (!name) {
            alert("Please enter an agent name.");
            return;
        }

        const details = {
            name,
            type: document.getElementById("agentType").value,
            description: document.getElementById("agentDescription").value.trim()
        };

        if (editId) {
            const agent = agents.find(item => item.id === editId);

            if (agent) {
                Object.assign(agent, details);
            }
        } else {
            agents.push({
                id: createId(),
                ...details,
                status: "Active",
                permissions: []
            });
        }

        saveData();
        renderAgents();
        resetAgentForm();
        document.getElementById("agentForm").classList.add("hidden");
    });

document.getElementById("agentTableBody")
    .addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");
        if (!button) return;

        const agent = agents.find(item => item.id === button.dataset.id);
        if (!agent) return;

        if (button.dataset.action === "view") {
            document.getElementById("profileSelect").value = agent.id;
            renderProfile();
            showPage("profile");
        }

        if (button.dataset.action === "edit") {
            document.getElementById("editId").value = agent.id;
            document.getElementById("agentName").value = agent.name;
            document.getElementById("agentType").value = agent.type;
            document.getElementById("agentDescription").value =
                agent.description;

            document.getElementById("formTitle").textContent = "Edit Agent";
            document.getElementById("agentForm").classList.remove("hidden");
            document.getElementById("agentForm")
                .scrollIntoView({ behavior: "smooth" });
        }

        if (button.dataset.action === "delete") {
            if (confirm(`Delete agent "${agent.name}"?`)) {
                agents = agents.filter(item => item.id !== agent.id);
                saveData();
                renderAgents();
            }
        }
    });

function showPage(pageId) {
    document.querySelectorAll(".nav-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.page === pageId);
    });

    document.querySelectorAll(".page").forEach(page => {
        page.classList.toggle("active", page.id === pageId);
    });
}

/* Update agent selectors */
function refreshSelects() {
    const selectIds = [
        "profileSelect",
        "configAgentSelect",
        "permissionAgentSelect"
    ];

    selectIds.forEach(id => {
        const select = document.getElementById(id);
        const previousValue = select.value;

        select.innerHTML = agents.map(agent => `
            <option value="${escapeHTML(agent.id)}">
                ${escapeHTML(agent.id)} - ${escapeHTML(agent.name)}
            </option>
        `).join("");

        if (agents.some(agent => agent.id === previousValue)) {
            select.value = previousValue;
        }
    });

    renderProfile();
    loadConfiguration();
    loadPermissions();
}

/* Agent profile */
function renderProfile() {
    const id = document.getElementById("profileSelect").value;
    const agent = agents.find(item => item.id === id);
    const container = document.getElementById("profileDetails");

    if (!agent) {
        container.innerHTML = "<p>No agent selected. Add an agent first.</p>";
        return;
    }

    container.innerHTML = `
        <h3>${escapeHTML(agent.name)}</h3>
        <p><strong>Agent ID:</strong> ${escapeHTML(agent.id)}</p>
        <p><strong>Type:</strong> ${escapeHTML(agent.type)}</p>
        <p><strong>Description:</strong>
            ${escapeHTML(agent.description || "No description")}</p>
        <p><strong>Status:</strong> ${escapeHTML(agent.status)}</p>
        <p><strong>Permissions:</strong>
            ${agent.permissions.length
            ? agent.permissions.map(escapeHTML).join(", ")
            : "No permissions assigned"}</p>
        <button id="toggleStatusBtn">
            ${agent.status === "Active" ? "Pause Agent" : "Activate Agent"}
        </button>
    `;

    document.getElementById("toggleStatusBtn")
        .addEventListener("click", () => {
            agent.status = agent.status === "Active" ? "Inactive" : "Active";
            saveData();
            renderAgents();
        });
}

document.getElementById("profileSelect")
    .addEventListener("change", renderProfile);

/* Agent configuration */
function loadConfiguration() {
    const id = document.getElementById("configAgentSelect").value;
    const agent = agents.find(item => item.id === id);

    if (!agent) {
        document.getElementById("configurationForm").reset();
        return;
    }

    document.getElementById("configName").value = agent.name;
    document.getElementById("configType").value = agent.type;
    document.getElementById("configDescription").value = agent.description;
    document.getElementById("configStatus").value = agent.status;
    document.getElementById("configMessage").textContent = "";
}

document.getElementById("configAgentSelect")
    .addEventListener("change", loadConfiguration);

document.getElementById("configurationForm")
    .addEventListener("submit", event => {
        event.preventDefault();

        const id = document.getElementById("configAgentSelect").value;
        const agent = agents.find(item => item.id === id);

        if (!agent) return;

        const name = document.getElementById("configName").value.trim();

        if (!name) {
            alert("Agent name cannot be empty.");
            return;
        }

        agent.name = name;
        agent.type = document.getElementById("configType").value;
        agent.description =
            document.getElementById("configDescription").value.trim();
        agent.status = document.getElementById("configStatus").value;

        saveData();
        renderAgents();

        document.getElementById("configMessage").textContent =
            "Configuration saved successfully.";
    });

/* Agent permissions */
function loadPermissions() {
    const id = document.getElementById("permissionAgentSelect").value;
    const agent = agents.find(item => item.id === id);

    document.querySelectorAll('input[name="permission"]')
        .forEach(checkbox => {
            checkbox.checked = agent
                ? agent.permissions.includes(checkbox.value)
                : false;
        });

    document.getElementById("permissionMessage").textContent = "";
}

document.getElementById("permissionAgentSelect")
    .addEventListener("change", loadPermissions);

document.getElementById("permissionsForm")
    .addEventListener("submit", event => {
        event.preventDefault();

        const id = document.getElementById("permissionAgentSelect").value;
        const agent = agents.find(item => item.id === id);

        if (!agent) {
            document.getElementById("permissionMessage").textContent =
                "Please add an agent first.";
            return;
        }

        agent.permissions = Array.from(
            document.querySelectorAll('input[name="permission"]:checked')
        ).map(checkbox => checkbox.value);

        saveData();
        renderProfile();

        document.getElementById("permissionMessage").textContent =
            "Permissions saved successfully.";
    });

/* Initial setup */
saveData();
renderAgents();
