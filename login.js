function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if (username == "" || password == "") {
		document.getElementById("message").innerHTML = "Introduceti numele si parola";
	} else if (username == "Vasea" && password == "122122") {
		document.getElementById("message").innerHTML = "Login successful!";
		window.location = "home.html";
        
	} else {
		document.getElementById("message").innerHTML = "Numele sau parola este incorecta";
	}
}