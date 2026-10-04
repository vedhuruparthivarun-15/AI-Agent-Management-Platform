let selectedStep = null;

function runWorkflow() {

    const status = document.getElementById("status");
    const buttons = document.querySelectorAll(".run-btn, .primary-button, .nav-button");

    if (status) {
        status.innerText = "⏳ Workflow is running...";
    }

    buttons.forEach(function(button) {
        button.disabled = true;
        button.style.opacity = "0.6";
    });

    setTimeout(function() {

        if (status) {
            status.innerText = "✓ Workflow completed successfully!";
        }

        buttons.forEach(function(button) {
            button.disabled = false;
            button.style.opacity = "1";
        });

    }, 1500);
}


function scrollToTemplates() {

    const templates = document.getElementById("templates");

    if (templates) {
        templates.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function selectStep(element) {

    const steps = document.querySelectorAll(".step-card");

    steps.forEach(function(step) {
        step.classList.remove("selected");
    });

    element.classList.add("selected");

    selectedStep = element;

    const title = element.querySelector("h3").innerText;

    const status = document.getElementById("status");

    if (status) {
        status.innerText = "Selected: " + title;
    }
}


function addStep() {

    const builder = document.querySelector(".builder");

    const connector = document.createElement("div");

    connector.className = "connector";

    connector.innerText = "→";


    const step = document.createElement("div");

    step.className = "step-card";

    step.innerHTML = `
        <div class="step-icon">+</div>
        <small>NEW STEP</small>
        <h3>Custom Action</h3>
        <p>New workflow step added.</p>
    `;


    step.onclick = function() {
        selectStep(this);
    };


    builder.appendChild(connector);
    builder.appendChild(step);


    const status = document.getElementById("status");

    if (status) {
        status.innerText = "✓ New workflow step added.";
    }
}


function resetWorkflow() {

    const steps = document.querySelectorAll(".step-card");

    steps.forEach(function(step) {
        step.classList.remove("selected");
    });

    selectedStep = null;

    const status = document.getElementById("status");

    if (status) {
        status.innerText = "Workflow ready to run.";
    }
}