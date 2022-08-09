const title = document.getElementById("title");
title.innerHTML = "DOM";
const paragraph = document.getElementsByTagName("p");
const heading = document.getElementsByTagName("h1");

function changeColor() {
	paragraph[0].class = "text-red";
	heading[0].style.color = "blue";
}
document.getElementById("italic").onclick = changeColor;
