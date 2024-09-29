document.getElementById('greeting-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Отримуємо дані користувача
    const teacherName = document.getElementById('teacher-name').value.trim();

    // Перевіряємо, чи введено ім'я вчителя
    if (!teacherName) {
        alert('Будь ласка, введіть ім\'я вчителя.');
        return;
    }

    // Генерація передбачення
    const prediction = generatePrediction(teacherName);

    // Відображення передбачення
    document.getElementById('teacher-name-output').innerText = teacherName;
    document.getElementById('prediction').innerText = prediction;
    document.getElementById('prediction-card').style.display = 'block';
    document.getElementById('greeting-form').style.display = 'none';
});

document.getElementById('restart').addEventListener('click', function() {
    // Скидаємо форму
    document.getElementById('greeting-form').reset();
    document.getElementById('prediction-card').style.display = 'none';
    document.getElementById('greeting-form').style.display = 'block';
});

function generatePrediction(teacherName) {
    const beginnings = [
        `Шановний(а) ${teacherName}, наступний рік обіцяє бути насиченим і захоплюючим!`,
        `Дорогий(а) ${teacherName}, вас чекають неймовірні відкриття разом з учнями.`,
        `${teacherName}, ваш професійний шлях приведе вас до несподіваних успіхів.`,
    ];

    const middles = [
        `У новому навчальному році ви відкриєте в собі нові таланти.`,
        `Ваші уроки надихнуть учнів на великі досягнення.`,
        `Ваша харизма і знання зроблять цей рік незабутнім.`,
    ];

    const endings = [
        `Готуйтеся до неймовірних звершень і приємних сюрпризів!`,
        `Учні вас обожнюють, і це принесе ще більше радісних моментів у новому році.`,
        `Не забудьте про відпочинок – він теж важливий для великих досягнень.`,
    ];

    // Генеруємо випадкові частини передбачення
    const beginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];

    // Повертаємо повне передбачення
    return `${beginning} ${middle} ${ending}`;
}
