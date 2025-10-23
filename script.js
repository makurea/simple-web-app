// Используем стрелочную функцию и const для современного кода
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessageElement = document.getElementById("error-message");
const loginButton = document.getElementById("loginButton");

// 1. Функция для имитации задержки (например, сетевого запроса)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * 2. Основная функция для обработки аутентификации
 * @param {string} username - Имя пользователя
 * @param {string} password - Пароль
 * @returns {Promise<boolean>} - Успешна ли аутентификация
 */
async function authenticateUser(username, password) {
    // В современном проекте здесь будет реальный запрос fetch/axios к API.
    // Пока что, имитируем задержку в 1 секунду для UX.
    await delay(1000);

    // Используем жесткое сравнение (===)
    if (username === "batman" && password === "batman") {
        return true;
    } else {
        return false;
    }
}


// 3. Обработчик отправки формы
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Очищаем предыдущие ошибки
    errorMessageElement.textContent = "";

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Блокируем кнопку на время запроса для предотвращения двойной отправки
    loginButton.disabled = true;
    loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Вход...';

    try {
        const isAuthenticated = await authenticateUser(username, password);

        if (isAuthenticated) {
            // Успех
            localStorage.setItem("isLoggedIn", "true");

            // Задержка перед редиректом для визуализации успеха
            await delay(500);
            window.location.href = "hello.html";

        } else {
            // Неудача
            errorMessageElement.textContent = "Неверное имя пользователя или пароль!";
            // Дополнительно: очистка поля пароля для безопасности
            passwordInput.value = "";
        }
    } catch (error) {
        // Обработка потенциальных сетевых ошибок
        console.error("Ошибка при аутентификации:", error);
        errorMessageElement.textContent = "Произошла ошибка сети. Повторите попытку.";
    } finally {
        // Разблокировка кнопки и восстановление текста
        loginButton.disabled = false;
        loginButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> Войти';
    }
});