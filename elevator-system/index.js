let elevator = document.querySelector(".elevator");
let buttons = document.querySelectorAll(".handle button");
var targetFloor = null;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let setFloor = this.getAttribute("data-set-floor");
    let selectedFloor = document.getElementById(`floor-${setFloor}`);

    if (targetFloor == null || targetFloor != selectedFloor) {
      targetFloor = selectedFloor;
      elevator.style.top = targetFloor.offsetTop + "px";
      targetFloor == null;
    }
  });
});
