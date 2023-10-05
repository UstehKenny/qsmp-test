// Establece la fecha de destino (7 de octubre de 2023)
const targetDate = new Date("2023-10-15T00:00:00").getTime();

// Actualiza el contador cada segundo
const interval = setInterval(function() {
    const currentTime = new Date().getTime();
    const timeLeft = targetDate - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Actualiza los elementos del contador en el HTML
    document.getElementById("days").textContent = days.toString().padStart(2, "0")[0];
    document.getElementById("days2").textContent = days.toString().padStart(2, "0")[1];
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0")[0];
    document.getElementById("hours2").textContent = hours.toString().padStart(2, "0")[1];
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")[0];
    document.getElementById("minutes2").textContent = minutes.toString().padStart(2, "0")[1];
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")[0];
    document.getElementById("seconds2").textContent = seconds.toString().padStart(2, "0")[1];

    // Detiene el contador cuando llega a cero
    if (timeLeft <= 0) {
        clearInterval(interval);
    }
}, 1000);
