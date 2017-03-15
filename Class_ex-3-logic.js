function wordCheck()
{
	name = document.getElementById("input").value
	if(name == "selenium"){
		document.getElementById("value").value = "Good day"
		window.confirm(name);
	}
	else{
	document.getElementById("value").value = "Please try again"
	window.alert("Error!");
	}
}