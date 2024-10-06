document.addEventListener('DOMContentLoaded', () => {
    // Показываем анимацию загрузки и скелетон
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('skeleton').classList.remove('hidden');

    // Функция для получения информации о системе
    function getSystemInfo() {
        const os = navigator.platform; // Получаем информацию об ОС
        const ram = navigator.deviceMemory || 'Unknown'; // Получаем информацию об ОЗУ
        const creator = 'Nezixyan Sarly (Maxim Glushkov)'; // Пример создателя панели
        const version = '1.0.1'; // Пример версии панели

        // Вставляем информацию в HTML
        document.getElementById('os').textContent = os;
        document.getElementById('ram').textContent = ram + ' GB';
        document.getElementById('creator').textContent = creator;
        document.getElementById('version').textContent = version;

        // Скрываем анимацию загрузки и скелетон, показываем информацию
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('skeleton').classList.add('hidden');
        document.getElementById('info').classList.remove('hidden');
    }

    // Вызываем функцию для получения и отображения информации
    setTimeout(getSystemInfo, 2000); // Имитация задержки загрузки
});