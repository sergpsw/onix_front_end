/*--Show sidebar--*/
let btn_off = document.querySelector(".btnNoneSidebar");
let btn_on = document.querySelector(".btnBlockSidebar");

btn_off.onclick = function() {
  document.querySelector(".sidebar").style.display = "none";
}
btn_on.onclick = function() {
  document.querySelector(".sidebar").style.display = "block";
}
/*--------*/


/*Operation on Tasks*/
let tasksCompleted = document.querySelector(".sidebar-tasks-completed");
let tasksCompletedCount = document.querySelector(".count-completed");
let tasksOpenCount = document.querySelector(".count-open");

tasksCompleted.onclick = function tasksCompleted() {
  if (confirm("Are you sure you want to change the number of tasks?")) {   
    if (tasksOpenCount.innerHTML > 0) {
       tasksOpenCount.innerHTML--;
    }
    tasksCompletedCount.innerHTML++;
    if (tasksOpenCount.innerHTML === "0") {
      alert("No open tasks!");
  }
  }
}
/*--------*/


/*РЎollect images*/
let imageSelect = document.querySelectorAll(".imgBg");
let notificationCount = document.querySelector(".count-img");

imageSelect.forEach( function(img, index) {
  img.addEventListener('click', function() {
    notificationCount.innerHTML = index;
 });
});
/*--------*/
