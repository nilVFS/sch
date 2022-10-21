setInterval(() => {
    const currentTime = new Date();
    document.getElementById('date').innerText = "Сегодня: " + currentTime.toLocaleDateString() + " " + currentTime.toLocaleTimeString();
}, 1000);