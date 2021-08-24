let mailLista = ["pincopallino@ciao", "booleaner@ciao", "david@ciao", "lui@ciao"];
let miaMail = prompt("Inserisci la tua Email");

for(var i = 0; i<mailLista.length; i++){
    if(mailLista[i]==miaMail){
        alert("Hai inserito una email valida, grazie.");
        document.getElementById("mail-confermata").innerHTML="Hai inserito una email valida cioè: " + miaMail;
        i=mailLista.length;
    }else if(i==(mailLista.length-1)){
        alert("Hai inserito un'email non valida, aggiorna la pagina e riprova.");
    }
}

alert("Inizia il gioco dei dadi");
let dadiGiocatore = parseInt((Math.random() * 6) + 1);
let dadiComputer = parseInt((Math.random() * 6) + 1);

document.getElementById("Numero-giocatore").innerHTML="Il numero del dado del giocatore è: " + dadiGiocatore;
document.getElementById("Numero-computer").innerHTML="Il numero del dado del computer è: " + dadiComputer;

if(dadiComputer<dadiGiocatore){
    document.getElementById("vincitore").innerHTML="Il vincitore è il giocatore (umano): " + dadiGiocatore;
} else if(dadiComputer>dadiGiocatore){
    document.getElementById("vincitore").innerHTML="Il vincitore è il computer: " + dadiComputer;
}else{
    document.getElementById("vincitore").innerHTML="Nessuno vince, i numeri sono uguali :)";
}