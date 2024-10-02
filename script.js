document.getElementById('teacher-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const teacherName = document.getElementById('teacher-name').value.trim();

    if (!teacherName) {
        alert('Будь ласка, введіть ім\'я вчителя.');
        return;
    }

    const prediction = generatePrediction(teacherName);

    document.getElementById('teacher-name-output').innerText = teacherName;
    document.getElementById('prediction').innerText = prediction;
    document.getElementById('prediction-card').style.display = 'block';
    document.getElementById('teacher-form').style.display = 'none';
});

document.getElementById('restart').addEventListener('click', function() {
    document.getElementById('teacher-form').reset();
    document.getElementById('prediction-card').style.display = 'none';
    document.getElementById('teacher-form').style.display = 'block';
});

function generatePrediction(teacherName) {
    const predictions = [
        `${teacherName}, вас чекають неймовірні відкриття разом з учнями. У новому навчальному році ви відкриєте в собі нові таланти.`,
        `Дорогий(а) ${teacherName}, ваші учні вас обожнюють, і це принесе ще більше радісних моментів у новому році.`,
        `Шановний(а) ${teacherName}, ваш професійний шлях приведе вас до несподіваних успіхів і натхнення.`,
        `${teacherName}, цей навчальний рік стане роком великих звершень, які запам'ятаються вам та вашим учням надовго.`,
        `${teacherName}, ваша доброта і мудрість стануть ключем до успіху в новому році. Учні вас дуже цінують!`
    ];

    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    return randomPrediction;
}
