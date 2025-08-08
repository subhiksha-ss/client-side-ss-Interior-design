// js/signup.js
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const toast = document.getElementById("toast");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
        signupForm.reset();
      }, 3000);
    });
  }
});
