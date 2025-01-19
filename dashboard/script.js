const username = localStorage.getItem('loggedInUser');

if (username) {
    document.getElementById('welcomeMessage').innerText = `Welcome, ${username}!`;
} else {
    window.location.href = '../signinsignup/index.html';
}
// Handle logout
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser'); 
    window.location.href = '../index.html';
});
