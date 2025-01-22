const username = localStorage.getItem('loggedInUser');

if (username) {
    document.getElementById('welcomeMessage').innerText = `Hey ${username}, Welcome To BLUE`;
} else {
    window.location.href = '../index.html';
}
// Handle logout
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser'); 
    window.location.href = '../index.html';
});

const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const body = document.querySelector("body");

modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    body.classList.add("prevent-background-scroll");
  });
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let modal = (btn.closest(".modal").style.display = "none");
    body.classList.remove("prevent-background-scroll");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
});