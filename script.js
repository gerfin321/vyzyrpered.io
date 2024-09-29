const predictions = [
    "Завтра на вас чекають нові можливості, і вам варто бути готовим до важливих рішень.",
    "Ви відчуєте приплив енергії, і це чудовий час для того, щоб зробити щось несподіване.",
    "Можливо, саме завтра ви зможете подолати те, що довгий час вас тримало на місці.",
    "Ваші творчі ідеї принесуть плоди, якщо ви присвятите час тому, що вам дійсно важливо.",
    "Завтра буде день, коли ви зможете розкрити свої сильні сторони та вразити оточуючих.",
    "Будьте готові до несподіваної зустрічі, яка може змінити хід вашого життя."
];

document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const hobby = document.getElementById('hobby').value;

    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];

    const resultText = `${name}, вам ${age} років, і вам подобається ${hobby}. Завтра вас чекає: ${randomPrediction}`;
    document.getElementById('result').innerText = resultText;

    document.getElementById('prediction').style.display = 'block';
});
