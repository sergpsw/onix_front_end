/*--Show sidebar--*/
let btn_off = document.querySelector(".btnShowNone");
let btn_on = document.querySelector(".btnShowBlock");

btn_off.onclick = function() {
  document.querySelector(".sidebar").style.display = "none";
}
btn_on.onclick = function() {
  document.querySelector(".sidebar").style.display = "block";
}
/*--------*/


/*Operation on Tasks*/
let tasksCompleted = document.querySelector(".tasks-completed");
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


/*Сollect images*/
let imageSelect = document.querySelectorAll(".imgBg");
let notificationCount = document.querySelector(".count-img");

imageSelect.forEach( function(img, index) {
  img.addEventListener('click', function() {
    notificationCount.innerHTML = index;
  });
});
/*--------*/
