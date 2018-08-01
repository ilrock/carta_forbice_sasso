var userScore = 0;
var cpuScore = 0;

var userPick;
var cpuPick;

var pickOptions = ["sasso", "carta", "forbice"];

var possibleUserPicks = document.getElementsByClassName('user-choice');
console.log(possibleUserPicks);

for(var i=0; i<possibleUserPicks.length; i++){
    console.log("i = ", i);
    possibleUserPicks[i].addEventListener('click', function(){
        console.log("Hai cliccato", this);
        
    });
}

function generateCpuPick(){
    cpuPick = pickOptions[Math.floor(Math.random() * pickOptions.length)];
}

function checkResult(){
    if(userPick == cpuPick){
    console.log("Hai pareggiato contro il computer");
    } else if(userPick == "sasso"){
        if(cpuPick == "carta"){
            console.log("Hai perso");
        } else {
            console.log("Hai vinto");
        }
    } else if(userPick == "carta"){
        if(cpuPick == "forbice"){
            console.log("Hai perso");
        } else{
            console.log("Hai vinto");
        }
    } else {
        if (cpuPick == "sasso"){
            console.log("Hai perso");
        } else {
            console.log("Hai vinto");
        }
    }
}