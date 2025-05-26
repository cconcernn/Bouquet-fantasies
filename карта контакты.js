
document.addEventListener('DOMContentLoaded', function() {
    
    const shopLocation = [59.946212, 30.366804]; 
    
    // 2. Инициализация карты с увеличенным zoom
    const map = L.map('map', {
        center: shopLocation,
        zoom: 20, // Уровень увеличения (12-20)
        zoomControl: true,
        scrollWheelZoom: true,
        touchZoom: true
    });

    // 3. Добавление слоя OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // 4. Создание кастомного маркера
    const marker = L.marker(shopLocation, {
        icon: L.divIcon({
            className: 'custom-marker',
            html: '<div class="custom-pin"></div>',
            iconSize: [30, 30]
        })
    }).addTo(map);

    // 5. Всплывающее окно
    marker.bindPopup("<b>Букетные фантазии</b><br>Ул. Чайковского 39").openPopup();
    
    console.log("Карта успешно загружена!"); // Для проверки в консоли
});