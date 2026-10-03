function approve() {

    document.getElementById("status").innerText =
        "Approved - Task is executing.";

    alert("Task approved and execution started!");
}

function reject() {

    document.getElementById("status").innerText =
        "Rejected - Task stopped.";

    alert("Task rejected.");
}