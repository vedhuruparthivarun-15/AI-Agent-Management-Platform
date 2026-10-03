function approveDecision() {

    document.getElementById("decision").innerText = "Approved";

    alert("Human approval received!");
}

function rejectDecision() {

    document.getElementById("decision").innerText = "Rejected";

    alert("Human rejected the action.");
}