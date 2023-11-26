function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    // Calculate rotation angles
    const hourRotation = 360 / 12 * (hours + minutes / 60);
    const minuteRotation = 360 / 60 * (minutes + seconds / 60);
    const secondRotation = 360 / 60 * seconds;

    // Apply rotations
    hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
