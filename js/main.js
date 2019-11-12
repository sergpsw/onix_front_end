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


