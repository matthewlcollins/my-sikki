document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("passwordInput");
    const loginButton = document.getElementById("loginButton");
    const correctPassword = "sarah collins"; // Change this to your desired password

    function checkPassword() {
        if (inputBox.value.toLowerCase() === correctPassword) {
            window.location.href = "main.html"; // Change to your target page
        } else {
            alert("Incorrect password. Please try again.");
        }
    }

    loginButton.addEventListener("click", checkPassword);
    inputBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkPassword();
        }
    });
});