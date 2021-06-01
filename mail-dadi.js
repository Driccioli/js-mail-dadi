var inputMail = prompt("Inserisci la tua email.")
var allowed = false;
var allowedMails =["ottavio@boolean.it", "alfredo@boolean.it", "davide@boolean.it"];

// Check se il nome inserito può accedere al gioco 
for(i=0; i<3; i++){
    if(inputMail === allowedMails[i]){
        allowed = true;
        break;
    }
}

if(allowed){
    // Calcolo numeri dadi e stampa su schermo 
    var playerNum = Math.floor(Math.random() * 6) + 1;
    var computerNum = Math.floor(Math.random() * 6) + 1;

    document.getElementById("playerNum").innerHTML ="Risultato giocatore: " + playerNum;
    document.getElementById("computerNum").innerHTML ="Risultato coumputer: " + computerNum;

    // Dichiarazione risultato 
    if(playerNum > computerNum){
        document.getElementById("result").innerHTML = "Hai vinto ai dadi! Congratulazioni!"
    } else if(playerNum == computerNum){
        document.getElementById("result").innerHTML = "Pareggio!"
    } else{
        document.getElementById("result").innerHTML = "Hai perso. Peccato!"
    }
}   else{
    // L'utente inserito non può entrare 
    document.getElementById("result").innerHTML = "Ci dispiace, la tua mail non è autorizzata ad accedere."
}