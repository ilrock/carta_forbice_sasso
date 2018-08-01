var score = {
    user: 0,
    cpu: 0
}
var userPick;
var cpuPick;

var pickOptions = ["sasso", "carta", "forbice"];

var possibleUserPicks = document.getElementsByClassName('user-choice');
for(var i=0; i<possibleUserPicks.length; i++){
    possibleUserPicks[i].addEventListener('click', onUserPick);
}

function onUserPick(){
    userPick = this.dataset.name;
    console.log("La tua scelta e': ", userPick);
    generateCpuPick();
}

function generateCpuPick(){
    cpuPick = pickOptions[Math.floor(Math.random() * pickOptions.length)];
    console.log("La tua del computer e': ", cpuPick);
    checkResult();
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