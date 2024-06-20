alert("Landscape orientation is recomended")


var puncherPosition = document.getElementById("puncher")
var targetPosition = document.getElementById("target")
var punchCode = 0
var targetCode


function launchPunch() {
    if (punchCode == 0) {
        puncherPosition.classList.remove("puncher-initial")
        puncherPosition.classList.add("puncher-final")
        punchCode = 1
        launchTarget()
    }
    else {
        alert("Please Reset")
    }
}

function launchTarget() {
    targetPosition.classList.remove("target-initial")
    targetPosition.classList.add("target-final")
}


function resetPunch() {
    puncherPosition.classList.remove("puncher-final")
    puncherPosition.classList.add("puncher-initial")
    targetPosition.classList.remove("target-final")
    targetPosition.classList.add("target-initial")
    punchCode = 0
}


// if (punchCode == 1) {
//     targetPosition.classList.remove("target-initial")
//     targetPosition.classList.add("target-final")
// }
// else {
//     alert("error")
// }