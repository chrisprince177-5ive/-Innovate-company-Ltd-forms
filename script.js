document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");

  if (!email.includes("@")) {
    emailError.textContent = "Please enter a valid email address";
  } else {
    emailError.textContent = "";
    alert("Registration successful");
  }
});
