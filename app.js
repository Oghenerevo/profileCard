function updateUTCTime() {
	const now = new Date();
	document.getElementById("utc-time").textContent = now.toUTCString();
}

setInterval(updateUTCTime, 1000);

updateUTCTime();