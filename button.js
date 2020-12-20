/*
*
*  Script for our register page
*
*/

function changeColor(id)
{
 
  document.getElementById(id).style.backgroundColor = "#242424";
  document.getElementById(id).style.boxShadow = "15px 15px black";
  document.getElementById(id).style.border = "10px solid #242424";
  document.getElementById(id).style.borderRadius = "13px";
}

if (screen.width >= 1680) {
	
	document.write("<style>body{max-height: 843px; max-width: 1920; zoom: 105%;}</style>")
}