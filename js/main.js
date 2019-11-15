/*--Show sidebar--*/
const btn_off = document.querySelector(".btnShowNone");
const btn_on = document.querySelector(".btnShowBlock");

btn_off.onclick = function() {
  document.querySelector(".sidebar").style.display = "none";
}
btn_on.onclick = function() {
  document.querySelector(".sidebar").style.display = "block";
}
/*--------*/


/*Operation on Tasks*/
const tasksCompleted = document.querySelector(".tasks-completed");
const tasksCompletedCount = document.querySelector(".count-completed");
const tasksOpenCount = document.querySelector(".count-open");

tasksCompleted.onclick = function tasksCompleted() {
  if (confirm("Are you sure you want to change the number of tasks?")) {   
    if (tasksOpenCount.innerHTML > 0) {
       tasksOpenCount.innerHTML--;
    }
    tasksCompletedCount.innerHTML++;
    if (tasksOpenCount.innerHTML < "0") {
      alert("No open tasks!");
    }
  }
}
/*--------*/


/*Сollect images*/
const imageSelect = document.querySelectorAll(".imgBg");
const notificationCount = document.querySelector(".count-img");

imageSelect.forEach( (img, index) => {
  img.addEventListener('click', () => {
    notificationCount.innerHTML = index;
  });
});
/*--------*/
