function toggleLoginForm() {
    var loginForm = document.getElementById("loginForm");

    if (loginForm.style.display === "block") {
        loginForm.style.display = "none";
    } else {
        loginForm.style.display = "block";
    }
}
