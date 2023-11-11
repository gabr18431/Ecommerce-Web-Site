let badgeCart = document.querySelector('.badge')
let badgeCartM = document.querySelector('.badge-m')
let count = 0
if (localStorage.getItem("selectedProducts")) {
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    badgeCartM.style.opacity = '1';
    badgeCart.style.opacity = '1';
    badgeCartM.innerHTML = items.length;
    badgeCart.innerHTML = items.length;
}

// image change on click ******
let singleProImg = document.querySelector('.single-pro-img') ;
let localImgSrc = localStorage.getItem('imgSrc') ;
let localImgSmall = localStorage.getItem('imgSmall') ;

let Products = document.querySelectorAll('.pro-container .pro img') ;
Products.forEach(product => {
    product.addEventListener('click', pro => {
        let imgTarget = pro.target.getAttribute('src') ;
        localStorage.setItem('imgSrc', imgTarget) ;
        let imagesSmallTarget = pro.target.dataset.name ;
        localStorage.setItem('imgSmall', imagesSmallTarget) ;
        if (localStorage.getItem("username")) {
            window.location.href="S-Products.html" ;
        } else window.location = "register.html"
    })
})
let ProductsBtn = document.querySelectorAll('.pro-container .pro a') ;
ProductsBtn.forEach( btn => {
    btn.addEventListener( 'click', () => {
        if (localStorage.getItem("username")) {
            let proCount = JSON.parse(localStorage.getItem("selectedProducts")).length
            badgeCart.innerHTML = proCount;
            badgeCartM.innerHTML = proCount;
            badgeCart.style.opacity = '1';
            badgeCartM.style.opacity = '1';
        } else window.location = "register.html"
    })
})
// new Arrivals box 
let ImgBoxes = document.querySelectorAll('.boxes-container .box img') ;
ImgBoxes.forEach( button => {
    button.addEventListener('click', (btn) => {
        let imgTarget = btn.target.getAttribute('src') ;
        localStorage.setItem('imgSrc', imgTarget) ;
        let imagesSmallTarget = btn.target.dataset.name ;
        localStorage.setItem('imgSmall', imagesSmallTarget) ;
        if (localStorage.getItem("username")) {
            window.location.href="S-Products.html" ;
        } else window.location = "register.html"
    } ) ;
    
})
let Products2Btn = document.querySelectorAll('.boxes-container .box a') ;
Products2Btn.forEach( btn => {
    btn.addEventListener( 'click', (e) => {
        if (localStorage.getItem("username")) {
            let proCount = JSON.parse(localStorage.getItem("selectedProducts")).length
            badgeCart.innerHTML = proCount;
            badgeCartM.innerHTML = proCount;
            badgeCart.style.opacity = '1';
            badgeCartM.style.opacity = '1';
            
        } else window.location = "register.html"
    })
})
// change images ********************************
var tr = `<img src="${localImgSrc}" width="100%" id="mainImg" alt="">
<div class="small-img-group">
    <div class="small-img-col">
        <img class="small-img" src="images/${localImgSmall}1.jpg" width="100%" alt="">
    </div>
    <div class="small-img-col">
        <img class="small-img" src="images/${localImgSmall}2.jpg" width="100%" alt="">
    </div>
    <div class="small-img-col">
        <img class="small-img" src="images/${localImgSmall}3.jpg" width="100%" alt="">
    </div>
    <div class="small-img-col">
        <img class="small-img" src="images/${localImgSmall}4.jpg" width="100%" alt="">
    </div>
</div>`;
document.querySelector(".single-pro-img").innerHTML = tr ;
// small Images
let mainImg = document.querySelector('#mainImg');
let smallImages = document.querySelectorAll('.small-img') ;
smallImages.forEach( (img) => {
img.addEventListener('click', (e) => {
    mainImg.src = e.target.src;
})
})
// info cart

// var image = button.closest(".single-pro-details").querySelector('#mainImg')
function printProduct(button) {
    count++;
    
    // الحصول على معلومات الصورة والسعر من الزرار المضغوط
    var imageSrc = localImgSrc;
    var price = button.parentNode.querySelector('h2').textContent;
    
    // جلب قيمة الـ ID من localStorage إذا كانت موجودة
    var id = localStorage.getItem("productId");
    if (id) {
        // تحويل قيمة الـ ID إلى عدد صحيح
        id = parseInt(id);
        // إضافة واحد إلى الـ ID
        id += 1;
    } else {
        // إذا لم تكن هناك قيمة محفوظة للـ ID في localStorage، قم بتعيين القيمة الأولية للـ ID
        id = 1;
    }
    
    // تحويل الصورة والسعر والـ ID إلى كائن JSON
    var product = {
        id: id,
        imageSrc: imageSrc,
        price: price
    };
    
    // جلب العناصر المحفوظة في localStorage إذا كانت موجودة
    var savedProducts = localStorage.getItem("selectedProducts");
    if (savedProducts) {
      // تحويل العناصر المحفوظة إلى مصفوفة
        savedProducts = JSON.parse(savedProducts);
    } else {
      // إذا لم تكن هناك عناصر محفوظة في localStorage، قم بإنشاء مصفوفة جديدة
        savedProducts = [];
    }
    
    // إضافة المنتج الجديد إلى المصفوفة
    savedProducts.push(product);
    
    // تحويل المصفوفة إلى سلسلة JSON
    var updatedProducts = JSON.stringify(savedProducts);
    
    // حفظ المنتجات المحدثة في localStorage
    localStorage.setItem("selectedProducts", updatedProducts);
    
    // حفظ الـ ID المحدث في localStorage
    localStorage.setItem("productId", id);

    let proCount = JSON.parse(localStorage.getItem("selectedProducts")).length
    badgeCart.innerHTML = proCount;
    badgeCartM.innerHTML = proCount;
}
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


// nav bar scroll show 
let navBar = document.querySelector('header');
let prevScrollPos = window.scrollY;
window.addEventListener('scroll', function () {
    let currScrollPos = window.scrollY;
    if (currScrollPos > prevScrollPos) {
        navBar.style.transform = 'translateY(-105%)';
    } else {
        navBar.style.transform = 'translateY(0%)';
    }
    prevScrollPos = currScrollPos;
})

let proCount = JSON.parse(localStorage.getItem("selectedProducts")).length
    badgeCart.innerHTML = proCount;