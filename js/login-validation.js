document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.id = "login-toast";
  toast.textContent = "Login successful!";
  document.body.appendChild(toast);

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const email = loginForm.querySelector("input[type='email']").value;
      const password = loginForm.querySelector("input[type='password']").value;

      // Dummy validation
      if (email && password) {
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
          // Redirect to dashboard
          window.location.href = "dashboard.html";
        }, 1000);
      } else {
        toast.textContent = "Please fill in both fields.";
        toast.style.backgroundColor = "red";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
      }
    });
  }
});
