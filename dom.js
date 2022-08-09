// ===DOM Title===
const domTitle = document.getElementsByTagName("title");
domTitle[0].innerHTML = "DOM";

// ===Container===
const container = document.getElementById("container");

// ===Heading===
const heading1 = document.getElementById("heading1");

// ===Styling===
function changeToNormal() {
	container.style.fontStyle = "normal";
}
