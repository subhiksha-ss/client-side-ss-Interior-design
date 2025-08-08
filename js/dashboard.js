function logout() {
  const toast = document.getElementById("toast");
  toast.textContent = "✅ Logout successful";
  toast.style.opacity = "1";

  // Wait 2 seconds, then redirect
  setTimeout(() => {
    toast.style.opacity = "0";
    window.location.href = "index.html"; // Replace with your login page
  }, 2000);
}
