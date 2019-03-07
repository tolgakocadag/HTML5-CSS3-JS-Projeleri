function haritaGoster() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(konumAl, hata);
    } else {
        harita.innerHTML = "Tarayıcı Geolocation desteklemiyor";
    }
}
 
function konumAl(position) {
    var latitudelongitude = position.coords.latitude + "," + position.coords.longitude;
    var haritaIMG_URL = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitudelongitude + "&zoom=17&size=800x200&sensor=true";
    document.getElementById("harita").innerHTML = "<img src='"+ haritaIMG_URL+"'>";
}
 
function hata(h) {
    switch(h.code) {
        case h.PERMISSION_DENIED:
            harita.innerHTML = "İzin verilmedi";
            break;
        case h.POSITION_UNAVAILABLE:
            harita.innerHTML = "Konum analiz edilemiyor";
            break;
        case h.TIMEOUT:
            harita.innerHTML = "Zaman aşımı";
            break;
        case h.UNKNOWN_ERROR:
            harita.innerHTML = "Bilinmeyen hata";
            break;
    }
}