function obliczZysk(wplata, iloscLat, oprocentowanie, podatek, okresKapitalizacji) {
    
    if (podatek.checked = true) {
        wynik = parseFloat(wynik)*19)/100);
  } else {
      
  }
    
}

function oblicz() {
    
    var wplata = parseFloat(document.getElementById('wplata').value);
    
    var iloscLat = parseFloat(document.getElementById('ilosc-lat').value);
    
    var okresKapitalizacji = parseFloat(document.getElementById('okres-kapitalizacji').value);
    
    var oprocentowanie = parseFloat(document.getElementById('oprocentowanie').value) / 100;
    
    var podatek = document.getElementById('podatek').checked;
       
    var okresKapitalizacji = parseFloat(document.getElementById('okres-kapitalizacji').value;)
    
    var wynik = obliczZysk(wplata, iloscLat, oprocentowanie, podatek, okresKapitalizacji);
    
}
