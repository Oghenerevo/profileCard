function updateUTCTime() {
	const now = new Date();
	document.getElementById("utc-time").textContent = now.toUTCString();
}

// Update time every second
setInterval(updateUTCTime, 1000);

// Initial call to display time immediately
updateUTCTime();