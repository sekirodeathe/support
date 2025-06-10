const form = document.getElementById('form');
const supportForm = document.getElementById('support-form');
const successMessage = document.getElementById('success-message');
const sendAgainBtn = document.getElementById('send-again');
const successText = document.getElementById('success-text');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const email = document.getElementById('email').value.trim();
  const consent = document.getElementById('consent');

  if (!consent.checked) {
    alert('Вы должны согласиться на обработку персональных данных.');
    return;
  }

  const userName = firstName || email;

  successText.innerText = `Спасибо, ${userName}!\nСообщение отправлено!`;

  supportForm.classList.add('hidden');
  successMessage.classList.remove('hidden');
});

sendAgainBtn.addEventListener('click', function () {
  form.reset();
  successMessage.classList.add('hidden');
  supportForm.classList.remove('hidden');
});
