// <script src="scripts/main.js"></script>
$('.parallax-window').parallax({imageSrc: 'img/bg-faqs.jpg'});

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('#myVideo').fadeOut();
        } else {
            $('#myVideo').fadeIn();
        }
    });
$('.sliderT').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    speed: 1000
});

var x = document.getElementById("more");
var x = document.getElementById("more");
var y = document.getElementById("drop");

y.addEventListener("mouseover",dropfunc);
function dropfunc() {
    x.style.display = "block";
};
y.addEventListener("mouseout",hidefunc);
function hidefunc() {
    x.style.display = "none";
};

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 40.691170, lng: -73.906876},
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 12,
        styles:[[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]]
    });
    var marker = new google.maps.Marker({
        position: {lat: 40.691170, lng: -73.906876},
        map: map,
        title: 'WebProffesional',
        icon: 'icon-map.png'
    });
}


var panelItem = document.querySelectorAll('.panel-title'),
    active = document.getElementsByClassName('panel-active');

Array.from(panelItem).forEach(function (item, i, panelItem) {
    item.addEventListener('mouseover', function (e) {
        if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
            active[0].classList.remove('panel-active'); // убрать класс panel-active
        // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
        this.classList.toggle('panel-active');
    });
});
Array.from(panelItem).forEach(function (item, i, panelItem) {
    item.addEventListener('mouseout', function (e) {
        if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
            active[0].classList.remove('panel-active'); // убрать класс panel-active
        // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
        this.classList.toggle('panel-active');
    });
});