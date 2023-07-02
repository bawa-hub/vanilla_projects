let elevator = document.querySelector(".elevator");
let btns = document.querySelectorAll(".handle button");
var targetFloor = null;

btns.forEach((button) => {
  button.addEventListener("click", function () {
    let floorNo = this.getAttribute("floor-no");
    let selectedFloor = document.getElementById(`floor-${floorNo}`);
    if (targetFloor == null || targetFloor != selectedFloor) {
      targetFloor = selectedFloor;
      elevator.style.top = targetFloor.offsetTop + "px";
      targetFloor == null;
    }
  });
});
