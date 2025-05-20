const menu = document.querySelector('menu');
const menuButton = document.getElementById('menuButton');
const closeButton = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
    menu.classList.add('show');
    menuButton.classList.add('hide');
});

closeButton.addEventListener('click', () => {
    menu.classList.remove('show');
    menuButton.classList.remove('hide');
});

// Получаем элементы
// Получаем элементы
const carousel = document.querySelector('.teamCarousel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

// Количество элементов в карусели
const items = document.querySelectorAll('.person');
const itemWidth = items[0].offsetWidth;
const totalWidth = itemWidth * items.length;

// Функция для клонирования элементов
function cloneItems() {
    // Клонируем первый и последний элементы
    const firstItem = items[0].cloneNode(true);
    const lastItem = items[items.length - 1].cloneNode(true);

    // Добавляем к карусели
    carousel.appendChild(firstItem); // Клонированный первый элемент в конец
    carousel.insertBefore(lastItem, carousel.firstChild); // Клонированный последний элемент в начало
}

// Функция для прокрутки влево
prevButton.addEventListener('click', () => {
    const currentTransform = getComputedStyle(carousel).transform;
    const currentTranslateX = currentTransform === 'none' ? 0 : parseFloat(currentTransform.split(',')[4]);

    // Если достигнут край, перемещаем в конец
    if (currentTranslateX >= 0) {
        carousel.style.transition = 'none'; // Отключаем анимацию на момент "перемещения"
        carousel.style.transform = `translateX(-${totalWidth - itemWidth}px)`; // Переход в конец
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out'; // Включаем анимацию снова
        }, 0); // Небольшая задержка для переключения
    } else {
        carousel.style.transform = `translateX(${currentTranslateX + itemWidth}px)`;
    }
});

// Функция для прокрутки вправо
nextButton.addEventListener('click', () => {
    const currentTransform = getComputedStyle(carousel).transform;
    const currentTranslateX = currentTransform === 'none' ? 0 : parseFloat(currentTransform.split(',')[4]);

    // Если достигнут конец, перемещаем в начало
    if (currentTranslateX <= -(totalWidth - itemWidth)) {
        carousel.style.transition = 'none'; // Отключаем анимацию на момент "перемещения"
        carousel.style.transform = 'translateX(0)'; // Переход в начало
        setTimeout(() => {
            carousel.style.transition = 'transform 0.2s ease-in-out'; // Включаем анимацию снова
        }, 0); // Небольшая задержка для переключения
    } else {
        carousel.style.transform = `translateX(${currentTranslateX - itemWidth}px)`;
    }
});

cloneItems();






