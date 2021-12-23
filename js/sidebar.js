function sidebar(btn) {
    var sidebar = document.getElementById("sidebar");
    var arrowRight = document.getElementById("arrowRight");
    var arrowLeft = document.getElementById("arrowLeft");
    if (sidebar.style.display == "block") {
        sidebar.style = "display: none !important; position: static !important; max-width: 400px;";
        btn.style = "display: block !important;";
        arrowRight.style = "display: block !important;"
        arrowLeft.style = "display: none !important;"
    } else {
        sidebar.style = "display: block !important;"
        btn.style = "position: absolute; z-index: 100;";
        arrowRight.style = "display: none !important;"
        arrowLeft.style = "display: block !important;"
    }
}

var status = document.getElementsByClassName("status");
console.log(document.getElementsByClassName("status")[0].textContent);
for (let i = 0; i < status.length; i++) {
	const classVar = document.getElementsByClassName("status")[i].classList[2];
	if (status[0].textContent == "Offline") {
		classVar = "bg-danger";
	} else if (status[0].textContent == "Available") {
		classVar = "bg-success";
	}
}