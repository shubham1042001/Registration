let un = document.getElementById("email");
let pass = document.getElementById("password");
let add = document.getElementById("address");
let gd = document.getElementById("gradution");
let brnch = document.getElementById("branch");
let yop = document.getElementById("yop");

function registerUser() {
	let userData={
		username : un.value,
		password : pass.value,
		address : add.value,
		gradution : gd.value,
		branch : brnch.value,
		yop : yop.value
	}

	saveData(userData);
	clearFeild();
	open("Login.html");

	function clearFeild(){
		un.value ="";
		pass.value ="";
		add.value ="";
		gd.value ="";
		brnch.value ="";
		yop.value ="";
	}

	function saveData(userData){
		localStorage.setItem("userInfo",userData)
	}
}
