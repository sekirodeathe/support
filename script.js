document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Проверка согласия на обработку данных
        const agreeCheckbox = document.getElementById('agree');
        if (!agreeCheckbox.checked) {
            alert('Необходимо согласие на обработку персональных данных');
            return;
        }
        
        // Получение данных формы
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Здесь можно добавить отправку данных на сервер
        
        // Открытие окна подтверждения
        const confirmationWindow = window.open('', '_blank', 'width=400,height=300,top=100,left=100');
        
        // Генерация контента для нового окна
        confirmationWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ru">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Сообщение отправлено</title>
                <style>
                    body {
                        background-color: #0d0221;
                        color: white;
                        font-family: 'Courier New', monospace;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        text-align: center;
                    }
                    .confirmation-container {
                        padding: 30px;
                    }
                    h2 {
                        color: #05d9e8;
                    }
                    .send-again-btn {
                        padding: 10px 20px;
                        background: transparent;
                        color: #ff2a6d;
                        border: 2px solid #ff2a6d;
                        font-family: 'Courier New', monospace;
                        cursor: pointer;
                        transition: all 0.3s;
                        margin-top: 20px;
                    }
                    .send-again-btn:hover {
                        background: #ff2a6d;
                        color: #0d0221;
                        box-shadow: 0 0 20px #ff2a6d;
                    }
                </style>
            </head>
            <body>
                <div class="confirmation-container">
                    <h2>Сообщение отправлено!</h2>
                    <p>Спасибо за обращение, ${formData.name}!</p>
                    <p>Мы ответим вам на почту: ${formData.email}</p>
                    <button class="send-again-btn">Отправить еще</button>
                </div>
                <script>
                    document.querySelector('.send-again-btn').addEventListener('click', function() {
                        window.close();
                        window.opener.location.reload();
                    });
                </script>
            </body>
            </html>
        `);
        
        // Закрытие текущего окна с формой
        window.close();
    });
});
