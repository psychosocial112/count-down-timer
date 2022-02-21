const updateTimer = () => {
    const future = Date.parse("2022-06-30T00:00:00.000Z");
    const now = new Date();
    const diff = future - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;

    const daysEl = document.getElementById("days");
	daysEl.innerText = d;
	const hoursEl = document.getElementById("hours");
	hoursEl.innerText = h;
	const minutesEl = document.getElementById("minutes");
	minutesEl.innerText = m;
	const secondsEl = document.getElementById("seconds");
	secondsEl.innerText = s;
}

setInterval(updateTimer, 1000);