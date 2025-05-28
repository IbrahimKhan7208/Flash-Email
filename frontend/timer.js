const countdownDuration = 48 * 60 * 60 * 1000;
    const endTime = new Date().getTime() + countdownDuration;

    function updateCountdown() {
      const now = new Date().getTime();
      const remaining = endTime - now;

      if (remaining <= 0) {
        document.getElementById("countdown").textContent = "00:00:00";
        clearInterval(timer);
        return;
      }

      const hours = Math.floor((remaining / (1000 * 60 * 60)));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      const formatted = 
        String(hours).padStart(2, "0") + " : " +
        String(minutes).padStart(2, "0") + " : " +
        String(seconds).padStart(2, "0");

      document.getElementById("countdown").textContent = formatted;
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();