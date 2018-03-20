// JavaScript Document

var modal = document.getElementById('myModal');
var div = document.getElementById("myImg");
var span = document.getElementByClassName("close")[0];
div.onclick = function() {
	modal.style.display = "block";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}