// register page ***************************
let userName = document.getElementById("username");
let email = document.getElementById("email");
let userPassword = document.getElementById("password");
let registerBtn = document.getElementById("sign-up");
function register(e) {
    e.preventDefault();
    if (
        userPassword.value === "" ||
        userName.value === "" ||
        email.value === ""
    ) {
        return;
    } else {
        localStorage.setItem("password", userPassword.value);
        localStorage.setItem("username", userName.value);
        localStorage.setItem("userEmail", email.value);
        setTimeout(() => window.location.href = "login.html", 500);
    }
}
registerBtn.addEventListener("click", register);

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
