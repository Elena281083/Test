const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon =  document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};
const btnShowMoreCards = document. querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function(){
    hiddenCards.forEach(function (card){
        card.classList.remove('card-link--hidden');
    })
})
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget){
    widget.addEventListener('click', function (e) {
    if (e.target.classList.contains('widget_title')) {
     e.target.classList.toggle('widget_title--active');
    e.target.nextElementSibling.classList.toggle('widget_body--hidden');
    }
});
});
const checkBoxAny = document.querySelector('#location-05');
const allLocationCheckboxes = document.querySelectorAll ('.location_checkbox');

checkBoxAny.addEventListener('change', function () {

    if (checkBoxAny.checked){
        allLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        });
        checkBoxAny.checked = true;
    }
})
