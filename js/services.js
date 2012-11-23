function buy(service) {
	if (localStorage[service]) {
		document.getElementById(service).innerHTML = "";
		localStorage.removeItem(service);
	} else {
		document.getElementById(service).innerHTML = "Booked! Click again to cancel.";
		localStorage[service] = true;
	}
}

function init (service) {
	if (localStorage[service]) {
		document.getElementById(service).innerHTML = "Booked! Click again to cancel.";
	}
}

init("design");
init("phosting");
init("chosting");
init("after");