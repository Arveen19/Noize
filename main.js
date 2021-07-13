window.addEventListener('scroll', function(){
  let nav = document.querySelector('nav');
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle('sticky', windowPosition);
});

function initMap() {
    const loc = { lat: 20.296059, lng: 85.824539};
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 8,
      center: loc
    });
    const marker = new google.maps.Marker({ position: loc, map: map });
}

function toggleM() {
  const toggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navigation');
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}