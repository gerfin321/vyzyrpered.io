document.getElementById('teacher-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const teacherName = document.getElementById('teacher-name').value.trim();

    if (!teacherName) {
        alert('Будь ласка, введіть ім\'я та по батькові.');
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
        `${teacherName}, ваша доброта і мудрість стануть ключем до успіху в новому році. Учні вас дуже цінують!`,
        `${teacherName}, ваша енергія та ентузіазм заряджають всіх навколо. Продовжуйте надихати!`,
        `Майбутній рік для ${teacherName} буде сповнений цікавих подій і приємних сюрпризів.`,
        `${teacherName}, ваш професіоналізм та відданість справі принесуть вам заслужене визнання.`,
        `Учні завжди будуть пам'ятати уроки, які ви їм дали, ${teacherName}. Нехай ваша праця приносить тільки радість!`,
        `${teacherName}, нові горизонти відкриються перед вами, і ваші мрії стануть реальністю.`,
        `Нехай кожен день приносить вам натхнення та задоволення від роботи, ${teacherName}!`,
        `${teacherName}, ваші мудрі поради допоможуть учням досягти великих висот.`,
        `Ваш талант навчати - справжній дар, ${teacherName}. Нехай він сяє ще яскравіше в новому році!`,
        `Попереду багато цікавих проектів та досягнень, ${teacherName}. Готуйтеся приймати вітання!`,
        `Ваша креативність та інноваційні підходи зроблять уроки незабутніми, ${teacherName}.`
    ];

    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    return randomPrediction;
}
