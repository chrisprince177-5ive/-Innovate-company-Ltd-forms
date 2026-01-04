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
document.getElementById("addField").addEventListener("click", function () {
  let form = document.getElementById("registerForm");
  let extraInput = document.createElement("input");
  extraInput.type = "text";
  extraInput.placeholder = "Extra Field";
  form.insertBefore(extraInput, form.querySelector("button[type='submit']"));
});
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let course = document.getElementById("course").value;

  localStorage.setItem("studentName", name);
  localStorage.setItem("studentEmail", email);
  localStorage.setItem("studentPhone", phone);
  localStorage.setItem("studentCourse", course);

  alert("Student data saved locally!");
});
