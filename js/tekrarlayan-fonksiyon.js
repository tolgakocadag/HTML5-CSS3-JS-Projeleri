/*alert("MERHABA");     -AÇILIR UYARI*/
function zamaniBaslat(){
    var zaman=new Date();
    var saat=zaman.getHours();
    var dakika=zaman.getMinutes();
    var saniye=zaman.getSeconds();
    saat=ciftsifirkontrolu(saat);
    dakika=ciftsifirkontrolu(dakika);
    saniye=ciftsifirkontrolu(saniye);
    document.getElementById('dijitalsaat').innerHTML=saat+":"+dakika+":"+saniye;
    setTimeout('zamaniBaslat()',1000);
}
function ciftsifirkontrolu(deger){
    if(deger<10){
        deger="0"+deger;
    }
    return deger;
}
window.onload=zamaniBaslat;