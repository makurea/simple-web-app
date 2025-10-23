// Символы для слота: используем Font Awesome иконки
const SYMBOLS = [
    '<i class="fas fa-bat"></i>', // Летучая мышь (иконка Бэтмена)
    '<i class="fas fa-gem"></i>',  // Драгоценный камень
    '<i class="fas fa-star"></i>', // Звезда
    '<i class="fas fa-bolt"></i>', // Молния
];

const REELS = [
    document.getElementById("reel1"),
    document.getElementById("reel2"),
    document.getElementById("reel3")
];
const spinButton = document.getElementById("spinButton");
const gameStatus = document.getElementById("game-status");
const jackpotModal = document.getElementById("jackpotModal");
const logoutButton = document.getElementById("logoutButton");

// ----------------------------------------------------
// Вспомогательные функции
// ----------------------------------------------------

/** Случайным образом выбирает символ */
const getRandomSymbol = () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

/** Имитация вращения барабана */
const spinReel = async (reelElement, duration) => {
    return new Promise(resolve => {
        reelElement.classList.add('spinning');

        // Каждую 50мс меняем символ для эффекта
        const interval = setInterval(() => {
            reelElement.querySelector('.reel-symbol').innerHTML = getRandomSymbol();
        }, 50);

        // Останавливаем через заданное время
        setTimeout(() => {
            clearInterval(interval);
            reelElement.classList.remove('spinning');
            resolve();
        }, duration);
    });
};

/** Показывает модальное окно */
const openModal = () => {
    jackpotModal.style.display = "block";
}

/** Скрывает модальное окно (глобальная функция для кнопки закрытия) */
window.closeModal = () => {
    jackpotModal.style.display = "none";
}


// ----------------------------------------------------
// Основная логика игры
// ----------------------------------------------------

async function handleSpin() {
    spinButton.disabled = true;
    spinButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Крутится...';
    gameStatus.textContent = "Барабаны вращаются! Удачи...";

    // 1. Запуск вращения барабанов с разной задержкой
    // Барабаны останавливаются по очереди
    const reelResults = [];

    // Вращение первого барабана
    await spinReel(REELS[0], 1500);
    reelResults.push(REELS[0].querySelector('.reel-symbol').innerHTML);

    // Вращение второго барабана
    await spinReel(REELS[1], 2000);
    reelResults.push(REELS[1].querySelector('.reel-symbol').innerHTML);

    // Вращение третьего барабана
    await spinReel(REELS[2], 2500);
    reelResults.push(REELS[2].querySelector('.reel-symbol').innerHTML);

    // 2. Проверка результата
    checkResult(reelResults);

    // 3. Восстановление кнопки
    spinButton.disabled = false;
    spinButton.innerHTML = '<i class="fas fa-sync-alt"></i> Крутить!';
}

function checkResult(results) {
    const [r1, r2, r3] = results;

    if (r1 === r2 && r2 === r3) {
        // Успех! Джекпот!
        gameStatus.innerHTML = '<span style="color: gold;">!!! ДЖЕКПОТ !!!</span>';
        openModal();
    } else if (r1 === r2 || r2 === r3 || r1 === r3) {
        // Частичный выигрыш
        gameStatus.textContent = "Почти! Два совпадения.";
    } else {
        // Проигрыш
        gameStatus.textContent = "Попробуйте снова. Фортуна не на вашей стороне.";
    }
}

function handleLogout() {
    // Чистим флаг входа
    localStorage.removeItem("isLoggedIn");
    // Перенаправляем на страницу входа
    window.location.href = "index.html";
}


// ----------------------------------------------------
// Слушатели событий
// ----------------------------------------------------

spinButton.addEventListener("click", handleSpin);
logoutButton.addEventListener("click", handleLogout);

// Инициализация символов после загрузки
REELS.forEach(reel => {
    reel.querySelector('.reel-symbol').innerHTML = getRandomSymbol();
});