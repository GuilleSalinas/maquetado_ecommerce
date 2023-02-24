
// $(document).ready(function() {
//     $('li').on('click', function() {
//         console.log('press una tecla');
//         $(this).addClass('active');
//         $(this).siblings().removeClass('active');
//     })
// })

const currentLocation = location.href;
console.log('location', currentLocation);
const menuItem = document.querySelectorAll('ul li a');
console.log('menuItem  :', menuItem);

const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    $(this).siblings().removeClass('active');
    if (menuItem[i].href === currentLocation) {
        console.log('menuItem  :', menuItem[i]);
        menuItem[i].className = 'active';
    }
}