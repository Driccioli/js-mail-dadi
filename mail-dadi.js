var inputName = prompt("Inserisci il tuo nome.")
var allowed = false;
var allowedNames =["Ottavio", "Alfredo", "Davide"];

// Check se il nome inserito può accedere al gioco 
for(i=0; i<3; i++){
    if(inputName === allowedNames[i]){
        allowed = true;
    }
}

if(allowed == true){
    // Calcolo numeri dadi e stampa su schermo 
    var playerNum = Math.floor(Math.random() * 6) + 1;
    var computerNum = Math.floor(Math.random() * 6) + 1;

    document.getElementById("playerNum").innerHTML ="Risultato giocatore: " + playerNum;
    document.getElementById("computerNum").innerHTML ="Risultato coumputer: " + computerNum;

    // Dichiarazione risultato 
    if(playerNum > computerNum){
        document.getElementById("result").innerHTML = "Hai vinto ai dadi! Congratulazioni!"
    }   else{
        document.getElementById("result").innerHTML = "Hai perso. Peccato!"
    }
}   else{
    // L'utente inserito non può entrare 
    document.getElementById("result").innerHTML = "Ci dispiace, non sei autorizzato a giocare ai dadi."
}