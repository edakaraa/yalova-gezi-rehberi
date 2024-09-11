//Navbar
document.addEventListener("DOMContentLoaded", function () {
    fetch("/shared/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        });
});
//Footer
document.addEventListener("DOMContentLoaded", function () {
    fetch('/shared/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error loading footer:', error));
});
//Swiper
var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000, // Slaytların 2 saniyede bir değişmesini sağlar
        disableOnInteraction: false, // Kullanıcı etkileşimi sonrasında otomatik ilerlemeyi durdurmaz
    },
    mousewheel: false,
});

const menuButton = document.getElementById('menu-button');
const menuContainer = document.querySelector('.menu-container');

menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});

window.addEventListener('click', (event) => {
    if (!menuContainer.contains(event.target) && !menuButton.contains(event.target)) {
        menuContainer.classList.remove('active');
    }
});