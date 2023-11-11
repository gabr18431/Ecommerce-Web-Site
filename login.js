// login page ***************************
let loginUserName = document.getElementById("loginUsername");
let loginUserPassword = document.getElementById("loginPassword");
let loginBtn = document.getElementById("sign-in");
let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");
loginBtn.addEventListener("click", function(e) {
    e.preventDefault();
    if (loginUserName.value === "" || loginUserPassword.value === "") {
        alert("Please fill data");
    } else {
        if (getUser && getUser.trim() === `${loginUserName.value}` && getPassword && getPassword.trim() === `${loginUserPassword.value}`) {
        window.location = 'index.html';
        } else {
        alert("Login failed");
        }
    }
});


// Script for navigation bar
let bar = document.querySelector('.bar') ;
let navigation = document.querySelector('.navbar') ;
let icons = document.querySelectorAll('.mobile span i')
let closeIcon = document.querySelector('.mobile span i.close')
bar.addEventListener('click', () => {
    navigation.classList.toggle('open');
    icons.forEach(icon => icon.classList.toggle('closed'));
})
closeIcon.addEventListener('click', () => {
    navigation.classList.toggle('open');
    icons.forEach(icon => icon.classList.toggle('closed'));
})
