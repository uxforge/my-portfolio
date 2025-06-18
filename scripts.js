document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // EmailJS form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm('service_k37n9kp', 'template_sqosrdh', this, 'HmBzXnRT4Z5rUNuL6')
      .then(function () {
        alert("✅ Message sent successfully!");
        form.reset();
      }, function (error) {
        console.error("❌ FAILED...", error);
        alert("⚠ Something went wrong. Please try again.");
      });
  });

  // Download image with confirmation
  function downloadWithConfirmation(imgId, fileName) {
    const element = document.getElementById(imgId);
    if (element) {
      element.addEventListener("click", () => {
        const confirmDownload = confirm("Are you sure you want to download me?");
        if (confirmDownload) {
          const link = document.createElement("a");
          link.href = element.src;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });
    }
  }

  downloadWithConfirmation("downloadLogo", "charlestechlogo.jpg");
  downloadWithConfirmation("downloadProfile", "profile.jpg");

  // Dark mode toggle
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "toggle-dark-mode";
  toggleBtn.textContent = "🌙 Dark Mode";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});
