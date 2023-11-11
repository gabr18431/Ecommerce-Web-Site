let badgeCart = document.querySelector('.badge')
let badgeCartM = document.querySelector('.badge-m')
let count = 0
if (localStorage.getItem("selectedProducts")) {
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    badgeCart.style.opacity = '1';
    badgeCartM.style.opacity = '1';
    badgeCart.innerHTML = items.length;
    badgeCartM.innerHTML = items.length;
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

if (localStorage.getItem("selectedProducts")) {
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    badgeCart.style.opacity = '1';
    badgeCartM.style.opacity = '1';
    badgeCart.innerHTML = items.length;
    badgeCartM.innerHTML = items.length;
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

function printImageSource(button) {
    if (localStorage.getItem("username")) {
        count += 1;
        badgeCart.style.opacity = '1';
        badgeCartM.style.opacity = '1';
        badgeCart.innerHTML = count;
        badgeCartM.innerHTML = count;
        // الحصول على معلومات الصورة والسعر من الزرار المضغوط
        var image = button.parentNode.querySelector('img')
        var imageSrc = image.getAttribute('src');
        var price = button.parentNode.querySelector('h4').textContent;
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
            
    } else window.location = "register.html"
    
}
if (localStorage.getItem("selectedProducts")) {
    let items = JSON.parse(localStorage.getItem("selectedProducts"));
    badgeCart.style.opacity = '1';
    badgeCartM.style.opacity = '1';
    badgeCart.innerHTML = items.length;
    badgeCartM.innerHTML = items.length;
}
// ********

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