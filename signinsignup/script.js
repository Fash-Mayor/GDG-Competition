document.querySelector("#sign-up").addEventListener("click", function () {
    document.querySelector(".login__forgot").style.display = "none";
    document.querySelector(".form-login").style.display = "none";
    document.querySelector(".form-signup").style.display = "block";
});

document.querySelector("#sign-in").addEventListener("click", function () {
    document.querySelector(".login__forgot").style.display = "block";
    document.querySelector(".form-login").style.display = "block";
    document.querySelector(".form-signup").style.display = "none";
});


document.querySelector("#form-login").addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('#login-input-user').value;
    const password = document.querySelector('#login-input-password').value;

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    localStorage.setItem('loggedInUser', username);

    window.location.href = '../dashboard/login.html';
});