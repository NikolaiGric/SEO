// Прокрутка по разделам
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth',
        });
    });
});

// Сообщение об отправке формы
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    form.reset();
});

// Анимация на кнопку "Узнать больше"
document.getElementById('learn-more').addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById('about').offsetTop - 60,
        behavior: 'smooth',
    });
});
