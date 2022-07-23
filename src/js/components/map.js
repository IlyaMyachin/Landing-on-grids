ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76009021161763,37.61432135958228],
    controls: [],
    zoom: 13.4
  });

  var myPlacemark1 = new ymaps.Placemark([55.76701583523213,37.6388907255316], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/svg/map-icon.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -42]
  });

  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark1);
}

const closeAddressBtn = document.querySelector('#contacts__close')
const openAddressBtn = document.querySelector('#contacts__open')
const mapAddress = document.querySelector('#contacts__wrapper')

let closeAddress = gsap.timeline({paused: true});
closeAddress.to(mapAddress, { duration: 0.3, ease: "power1.out", opacity: 0})
.to('.contacts__subtitle', {duration: 0.3, opacity: "0"}, "-=0.7")
.to('.contacts__address', {duration: 0.3, opacity: "0"}, "-=0.9")
.fromTo(closeAddressBtn, {display: "block"}, {display: "none"}, "-=0.7")
.fromTo(openAddressBtn, {display: "none"}, {display: "block"}, "-=0.3")
.fromTo(openAddressBtn,  {opacity: "0"}, {opacity: "1"})

closeAddressBtn.addEventListener('click', () => closeAddress.play())
openAddressBtn.addEventListener('click', () => closeAddress.reverse())

