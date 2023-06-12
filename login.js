function validateForm(event) {
    event.preventDefault();
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    // Проверка логина и пароля
    if (username === 'admin' && password === 'admin') {
        alert('Вітаємо адміністратор!');
        window.location.href = 'admin.html';
    } else {
        alert('Уви(');
    }
}
document.getElementById('signin').addEventListener('submit', validateForm);