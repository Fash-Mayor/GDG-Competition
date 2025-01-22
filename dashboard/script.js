const username = localStorage.getItem('loggedInUser');

if (username) {
    document.getElementById('welcomeMessage').innerText = `Hey ${username}, Welcome To BLUE`;
} else {
    window.location.href = '../signinsignup/index.html';
}
// Handle logout
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser'); 
    window.location.href = '../signinsignup/index.html';
});
