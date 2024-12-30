// Функция для анимации элементов при попадании их в область видимости
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in'); // Ищем все элементы с классом .fade-in
    const windowHeight = window.innerHeight; // Получаем высоту окна браузера

    elements.forEach(function (el) {
        const rect = el.getBoundingClientRect(); // Получаем координаты элемента относительно окна
        if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
            // Если элемент полностью или частично видим на экране
            el.classList.add('visible'); // Добавляем класс, который активирует анимацию
        }
    });
}

// Добавляем обработчик события на прокрутку
window.addEventListener('scroll', animateOnScroll);

// Вызываем функцию один раз, чтобы анимации сработали сразу при загрузке
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Получаем контейнер с изображениями
const slider = document.querySelector('.image-slider');
const slides = document.querySelectorAll('.image-slider .slide');

// Устанавливаем начальный индекс слайда
let slideIndex = 0;

// Функция для прокрутки слайдов
function showNextSlide() {
    // Сдвигаем на 3 слайда за раз (по 3 фотографии на строку)
    slideIndex = (slideIndex + 3) % slides.length; // Модуль для цикличности слайдов
    slider.style.transform = `translateX(-${slideIndex * 33.333}%)`; // Сдвиг на 33.333% ширины
}

// Запускаем слайдер (переход через 6 секунд)
setInterval(showNextSlide, 6000);

// Инициализация показа первого слайда
showNextSlide();
