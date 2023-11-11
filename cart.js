let infoProductCart = document.querySelector('.cart table tbody')
let tableProductCart = document.querySelector('.cart table ')
let noProductInCart = document.querySelector('.cart .no-product')


function drawProductUI(allItems = []) {
    if (JSON.parse(localStorage.getItem("selectedProducts")).length === 0) {
        tableProductCart.style.display = 'none';
        noProductInCart.style.display = 'block';
    } 
    let productInCart = JSON.parse(localStorage.getItem("selectedProducts")) || allItems;
    let Products = productInCart.map((item) => {
        return `
        <tr>
            <td><i onclick="removeCart(${item.id})" class="far fa-times-circle"></i></td>
            <td><img src="${item.imageSrc}" alt=""></td>
            <td>Cartoon Astronaut T-Shirts</td>
            <td>${item.price}</td>
            <td><input type="number" id="number" value="1"></td>
            <td>${item.price}</td>
        </tr>
        `;
    }).join("")
    infoProductCart.innerHTML = Products
}
drawProductUI()
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


function removeCart(id) {
    if (localStorage.getItem("selectedProducts")) {
        let items = JSON.parse(localStorage.getItem("selectedProducts"));
        let filtered = items.filter((item) => item.id !== id) ;
        localStorage.setItem("selectedProducts" , JSON.stringify(filtered));
        drawProductUI(filtered)
    }
}

