document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (username === "batman" && password === "batman") {
      // Сохраним флаг входа (чтобы hello.html знал, что вход был)
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "hello.html";
    } else {
      errorMessage.textContent = "Неверный логин или пароль!";
    }
  });
  