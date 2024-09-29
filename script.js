document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Отримання даних користувача
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const mood = document.getElementById('mood').value;
    const animal = document.getElementById('animal').value;

    // Перевірка заповнення всіх полів
    if (!name || !age || !mood || !animal) {
        alert('Будь ласка, заповніть всі поля форми.');
        return;
    }

    // Генерація історії
    const story = generateStory(name, age, mood, animal);

    // Відображення історії
    document.getElementById('result').innerHTML = story;
    document.getElementById('story').style.display = 'block';
    document.querySelector('.form-container form').style.display = 'none';
});

document.getElementById('restart').addEventListener('click', function() {
    // Скидання форми
    document.getElementById('user-form').reset();
    document.getElementById('story').style.display = 'none';
    document.querySelector('.form-container form').style.display = 'block';
});

function generateStory(name, age, mood, animal) {
    // Массиви фраз для історії
    const beginnings = [
        `Прокинувшись рано вранці, ${name} відчув(ла), що день буде незвичайним.`,
        `Це був звичайний ранок для ${name}, але щось було не так.`,
        `${name} відкрив(ла) очі і зрозумів(ла), що сьогодні світ виглядає інакше.`,
    ];

    const middles = [
        `Вирішивши не звертати уваги на дивні відчуття, ${name} пішов(ла) займатися улюбленою справою — ${animal} спостерігали за ним(нею) з цікавістю.`,
        `Раптом ${animal} заговорив(ла) людським голосом і запропонував(ла) неймовірну пригоду.`,
        `Несподівано з'явився портал, і ${name} разом з ${animal} потрапили у паралельний всесвіт.`,
    ];

    const endings = [
        `Після всіх пригод, ${name} зрозумів(ла), що ${mood} настрій допоміг пережити цей незвичайний день.`,
        `В кінці дня, ${name} усміхнувся(лась) і подумав(ла): "Добре, що мені ${age}, і життя тільки починається!"`,
        `Цей день назавжди залишився в пам'яті ${name}, нагадуючи, що життя сповнене сюрпризів.`,
    ];

    // Випадковий вибір фраз
    const beginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];

    // Формування повної історії
    const fullStory = `${beginning} ${middle} ${ending}`;

    return fullStory;
}
