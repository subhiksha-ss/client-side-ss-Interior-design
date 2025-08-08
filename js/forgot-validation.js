document.getElementById("forgotForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMsg = document.getElementById("error-message");

  if (newPassword !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match.";
    errorMsg.style.color = "red";
  } else {
    errorMsg.textContent = "";
    
    // Show toast message
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
      document.getElementById("forgotForm").reset(); // Optional: Clear the form
    }, 3000);
  }
});
