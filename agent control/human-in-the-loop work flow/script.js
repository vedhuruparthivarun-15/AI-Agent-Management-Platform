function approveWorkflow() {

    document.getElementById("reviewText").innerText =
        "Approved. Agent can continue the workflow.";

    alert("Workflow approved!");
}

function rejectWorkflow() {

    document.getElementById("reviewText").innerText =
        "Rejected. Workflow has been stopped.";

    alert("Workflow rejected!");
}