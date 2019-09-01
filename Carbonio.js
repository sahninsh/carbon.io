//JS fuck

function opennav() {
	document.getElementById('sidepanel').style.width = "250px";
	document.getElementById('landing').style.marginLeft = "250px";
	document.getElementById('hamburger').style.opacity = "0";
	document.getElementById('lund').style.right = "110px";
	document.getElementById('lunds').style.right = "110px";
}
function closenav() {
	document.getElementById('sidepanel').style.width = "0";
	document.getElementById('landing').style.marginLeft = "0";
	document.getElementById('hamburger').style.opacity = "0.8";
	document.getElementById('lund').style.right = "0px";		
	document.getElementById('lunds').style.right = "0px";
}

// add smooth scroll by Js