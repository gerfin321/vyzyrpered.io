<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Супер сігма передбачення на завтра хрустальний шар максімус</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #2193b0, #6dd5ed);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            padding: 0;
        }

        h1 {
            font-size: 3rem;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        .form-container {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            max-width: 500px;
            width: 100%;
            text-align: center;
            transition: all 0.5s;
        }

        input, select, button {
            width: 90%;
            padding: 12px;
            margin: 10px 0;
            font-size: 1rem;
            border: none;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
        }

        input:focus, select:focus {
            transform: scale(1.05);
            outline: none;
        }

        button {
            background-color: #ff6f61;
            color: white;
            cursor: pointer;
        }

        button:hover {
            background-color: #e55750;
            transform: scale(1.1);
        }

        #prediction {
            display: none;
            margin-top: 30px;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 20px;
            border-radius: 15px;
        }

        p {
            font-size: 1.2rem;
        }

        .fade-in {
            animation: fadeIn 2s forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body>

    <h1>Генератор передбачень на завтра</h1>
    
    <div class="form-container">
        <form id="user-form">
            <label>Як вас звати?</label>
            <input type="text" id="name" placeholder="Введіть ваше ім'я" required>

            <label>Скільки вам років?</label>
            <input type="number" id="age" placeholder="Введіть ваш вік" required>

            <label>Що вам подобається робити?</label>
            <input type="text" id="hobby" placeholder="Ваше хобі" required>

            <button type="submit">Дізнатись передбачення</button>
        </form>

        <div id="prediction" class="fade-in">
            <h2>Ваше передбачення:</h2>
            <p id="result"></p>
        </div>
    </div>

    <script>
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
    </script>

</body>
</html>
