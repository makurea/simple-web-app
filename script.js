// Используем 'const' для неизменяемых ссылок на элементы
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessageElement = document.getElementById("error-message");
const loginButton = document.getElementById("loginButton");

// 1. Функция для имитации задержки (например, сетевого запроса)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * 2. Основная функция для обработки аутентификации
 * В продакшене здесь будет fetch/axios запрос.
 * @param {string} username - Имя пользователя
 * @param {string} password - Пароль
 * @returns {Promise<boolean>} - Успешна ли аутентификация
 */
async function authenticateUser(username, password) {
    await delay(1000); // Имитация задержки

    // Использование более безопасного "batman/batman" - только для примера
    return username === "batman" && password === "batman";
}

// Вспомогательная функция для восстановления состояния кнопки
const restoreButton = () => {
    loginButton.disabled = false;
    loginButton.innerHTML = '<i class="fas fa-sign-in-alt" aria-hidden="true"></i> Войти';
};

// 3. Обработчик отправки формы
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 🚀 Клиентская валидация: проверяем на пустоту
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        errorMessageElement.textContent = "Пожалуйста, заполните оба поля!";
        return;
    }

    // Очищаем предыдущие ошибки
    errorMessageElement.textContent = "";

    // Блокируем кнопку на время запроса
    loginButton.disabled = true;
    // Используем 'aria-hidden' для иконки, чтобы не дублировать текст
    loginButton.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Вход...';

    try {
        const isAuthenticated = await authenticateUser(username, password);

        if (isAuthenticated) {
            // Успех
            localStorage.setItem("isLoggedIn", "true");
            loginButton.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Успех!'; // Визуализация успеха

            // Задержка перед редиректом для визуализации успеха
            await delay(500);

            // Заменяем hello.html на anime.html, как запрошено
            window.location.href = "anime.html";
        } else {
            // Неудача
            errorMessageElement.textContent = "Неверное имя пользователя или пароль!";
            passwordInput.value = ""; // Очистка поля пароля для безопасности
            restoreButton();
        }
    } catch (error) {
        // Обработка потенциальных сетевых ошибок
        console.error("Ошибка при аутентификации:", error);
        errorMessageElement.textContent = "Произошла ошибка сети. Повторите попытку.";
        restoreButton();
    }
    // Обратите внимание: 'finally' не нужен, так как restoreButton вызывается в 'else' и 'catch',
    // а при успехе происходит редирект.
});