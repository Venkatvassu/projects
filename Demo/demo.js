function demo() {
	document.getElementById("demo").textContent="Hi";
	document.getElementById("demo").style.color="blue";
}
function demo2()
{
	document.getElementById("demo").textContent="Change Heading";
	document.getElementById("demo").style.color="red";
}
function on() {
	document.getElementById("onn").src = "https://freepngimg.com/thumb/bulb/4-yellow-light-bulb-png-image.png";
	// document.getElementById("onn").textContent="hello";
	document.getElementById("on").style.backgroundColor = "gray";
	document.getElementById("on").style.color = "black";
	document.getElementById("of").style.backgroundColor = "red";

}
function off(){
	document.getElementById("onn").src="https://freepngimg.com/thumb/bulb/3-bulb-png-image.png";
	document.getElementById("on").style.backgroundColor = "green";
	document.getElementById("on").style.color = "black";
	document.getElementById("of").style.backgroundColor = "gray";

}