/*
SWITCH(DEĞER){
    CASE 1:
        KODLAR 1;
        break;
    CASE 2:
        KODLAR 2;
        break;
    CASE n:
        KODLAR 3;
        break;
    DEFAULT:
        KODLAR 4;
}*/
var zaman=new Date();
document.write("<p>"
                +zaman.getDate()
                +"/"+(zaman.getMonth()+1)+"/"
                +zaman.getYear()+" "
                +gunuyazdir(zaman.getDay())
                +"</p>"
);
function gunuyazdir(x){
    switch(x){
        case 0:
            return "Pazar";
            break;
        case 1:
            return "Pazartesi";
            break;
        case 2:
            return "Salı";
            break;
        case 3:
            return "Çarşamba";
            break;
        case 4:
            return "Perşembe";
            break;
        case 5:
            return "Cuma";
            break;
        case 6:
            return "Cumartesi";
            break;
        default:
            return "Hata!";
            break;
    }
}