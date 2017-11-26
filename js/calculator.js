function obliczZysk(wplata, iloscLat, oprocentowanie, podatek, okresKapitalizacji) {
//  alternatywa dla if
    var oprocentowanieOpodatkowane = (podatek)?(oprocentowanie*0.81):oprocentowanie;

//  odpowiadający powyzszemu zapisowi if-else
//    if(podatek) {
//         var oprocentowanieOpodatkowane = oprocentowanie * 0.81;
//    } else {
//        var oprocentowanieOpodatkowane = oprocentowanie;
//    }
    
    
    var kapital = wplata * Math.pow(1 + (oprocentowanieOpodatkowane / okresKapitalizacji), iloscLat * okresKapitalizacji);
    
//toFixed - zaokrąglanie liczb po przecinku
    return kapital.toFixed(2);
    
}

function oblicz() {
    
    
//  pobieranie zmiennych z formularza i parsowanie do floata
    var wplata = parseFloat(document.getElementById('wplata').value);
    
    var iloscLat = parseFloat(document.getElementById('ilosc-lat').value);
    
    var okresKapitalizacji = parseFloat(document.getElementById('okres-kapitalizacji').value);
    
    var oprocentowanie = parseFloat(document.getElementById('oprocentowanie').value) / 100;
    
    var podatek = document.getElementById('podatek').checked;

    
//  przypisanie wyniku obliczania podatku do zmiennej wynik
    var wynik = obliczZysk(wplata, iloscLat, oprocentowanie, podatek, okresKapitalizacji);
    
    document.getElementById('wynik').innerHTML = 'Twoja stopa zwrotu to ' + wynik + 'pln';
}


document.getElementById('oblicz').onclick = oblicz;

