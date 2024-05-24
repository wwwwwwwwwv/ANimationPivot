document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repeatEmail = document.getElementById('repeatEmail').value;
    var repeatPassword = document.getElementById('repeatPassword').value;
    
    if (email === repeatEmail && password === repeatPassword) {
        document.getElementById('loginForm').style.border = '2px solid green';
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        window.location.href = 'film.html';
    } else {
        document.getElementById('loginForm').style.border = '2px solid red';
    }
});

var savedEmail = localStorage.getItem('email');
var savedPassword = localStorage.getItem('password');

if (savedEmail && savedPassword) {
    document.getElementById('email').value = savedEmail;
    document.getElementById('repeatEmail').value = savedEmail;
    document.getElementById('password').value = savedPassword;
    document.getElementById('repeatPassword').value = savedPassword;
}

