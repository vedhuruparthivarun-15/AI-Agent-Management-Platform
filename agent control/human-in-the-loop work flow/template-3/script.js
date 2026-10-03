function verify() {

    document.getElementById("message").innerText =
        "Verified. Workflow can continue.";

    alert("Human verification completed!");
}

function stopWorkflow() {

    document.getElementById("message").innerText =
        "Workflow stopped by human.";

    alert("Workflow stopped.");
}