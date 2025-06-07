document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    const button = this.querySelector('button');
    const originalButtonText = button.textContent;
    button.textContent = 'Отправка...';
    button.disabled = true;
    
    fetch('/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').textContent = data.message;
        document.getElementById('responseMessage').style.color = data.success ? 'green' : 'red';
        
        if(data.success) {
            document.getElementById('feedbackForm').reset();
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Отправлено!';
        document.getElementById('responseMessage').style.color = 'red';
    })
    .finally(() => {
        button.textContent = originalButtonText;
        button.disabled = false;
    });
});
