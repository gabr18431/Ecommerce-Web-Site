let badgeCart = document.querySelector(".badge");
let badgeCartM = document.querySelector(".badge-m");
let count = 0;
// *********************************
// user information
let userInfo = document.getElementById("userInfo");
let userDom = document.getElementById("user");
let logUl = document.querySelector("header .navbar ul.log");
let localStorageUser = localStorage.getItem("username");
let localStorageUserPassword = localStorage.getItem("password");
if (localStorageUser) {
    logUl.remove();
    userInfo.style.display = "block";
    userDom.innerHTML = localStorageUser;
}

if (localStorage.getItem("selectedProducts")) {
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    badgeCart.style.opacity = "1";
    badgeCartM.style.opacity = "1";
    badgeCart.innerHTML = items.length;
    badgeCartM.innerHTML = items.length;
}
// Script for navigation bar
let bar = document.querySelector(".bar");
let navigation = document.querySelector(".navbar");
let icons = document.querySelectorAll(".mobile span i");
let closeIcon = document.querySelector(".mobile span i.close");
bar.addEventListener("click", () => {
    navigation.classList.toggle("open");
    icons.forEach((icon) => icon.classList.toggle("closed"));
});
closeIcon.addEventListener("click", () => {
    navigation.classList.toggle("open");
    icons.forEach((icon) => icon.classList.toggle("closed"));
});

document.querySelector(".hero button").addEventListener("click", () => {
    if (localStorage.getItem("username")) {
        window.location.href = "shop.html";
    } else window.location = "register.html";
});
// image change on click ******
let singleProImg = document.querySelector(".single-pro-img");
let localImgSrc = localStorage.getItem("imgSrc");
let localImgSmall = localStorage.getItem("imgSmall");
let Products = document.querySelectorAll(".pro-container .pro img");
Products.forEach((product) => {
    product.addEventListener("click", (pro) => {
        let imgTarget = pro.target.getAttribute("src");
        localStorage.setItem("imgSrc", imgTarget);
        let imagesSmallTarget = pro.target.dataset.name;
        localStorage.setItem("imgSmall", imagesSmallTarget);
        if (localStorage.getItem("username")) {
            window.location.href = "S-Products.html";
        } else window.location = "register.html";
    });
});
let ProductsBtn = document.querySelectorAll(".pro-container .pro a");
ProductsBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (localStorageUser && localStorageUserPassword) {
            window.location = "shop.html";
        } else window.location = "register.html";
    });
});

// new Arrivals box
let ImgBoxes = document.querySelectorAll(".boxes-container .box img");
ImgBoxes.forEach((button) => {
    button.addEventListener("click", (btn) => {
        let imgTarget = btn.target.getAttribute("src");
        localStorage.setItem("imgSrc", imgTarget);
        let imagesSmallTarget = btn.target.dataset.name;
        localStorage.setItem("imgSmall", imagesSmallTarget);
        if (localStorage.getItem("username")) {
            window.location.href = "S-Products.html";
        } else window.location = "register.html";
    });
});
let Products2Btn = document.querySelectorAll(".boxes-container .box a");
Products2Btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (localStorageUser && localStorageUserPassword) {
            window.location = "shop.html";
        } else window.location = "register.html";
    });
});

let btnNewSection = document.querySelectorAll(".new button");
btnNewSection.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (localStorageUser && localStorageUserPassword) {
            window.location = "shop.html";
        } else window.location = "register.html";
    });
});

// nav bar scroll show
let navBar = document.querySelector("header");
let prevScrollPos = window.scrollY;
window.addEventListener("scroll", function () {
    let currScrollPos = window.scrollY;
    if (currScrollPos > prevScrollPos) {
        navBar.style.transform = "translateY(-105%)";
    } else {
        navBar.style.transform = "translateY(0%)";
    }
    prevScrollPos = currScrollPos;
});
