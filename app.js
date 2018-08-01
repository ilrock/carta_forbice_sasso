var score = {
    user: 0,
    cpu: 0
}
var userPick;
var cpuPick;

var pickOptions = [
    {
        name: "sasso",
        image: "assets/sasso.png"
    },
    {
        name: "carta",
        image: "assets/carta.png"
    },
    {
        name: "forbice",
        image: "assets/forbice.png"
    }
];

var possibleUserPicks = document.getElementsByClassName('user-choice');

for(var i=0; i<possibleUserPicks.length; i++){
    possibleUserPicks[i].addEventListener('click', onUserPick);
}

function onUserPick(){
    userPick = this.dataset.name;
    generateCpuPick();
}

function generateCpuPick(){
    cpuPick = pickOptions[Math.floor(Math.random() * pickOptions.length)];

    var index = 0;
    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun ++;

        var tmpImageHtml = "<img src='" + pickOptions[index].image + "' height='100' width='100'>"
        document.getElementById("computer-choice").innerHTML = tmpImageHtml;

        if(index == pickOptions.length -1){
            index = 0;
        } else {
            index++;
        }

        if(timesRun == 20){
            clearInterval(interval);
        }
        
    }, 150);

    
    document.getElementById("result").innerHTML = checkResult();
}

function checkResult(){
    if(userPick == cpuPick.name){
        return ("Hai pareggiato contro il computer");
    }
    
    if(userPick == "sasso"){
        if(cpuPick.name == "carta"){
            return("Hai perso");
        } else {
            return("Hai vinto");
        }
    }
    
    if(userPick.name == "carta"){
        if(cpuPick.name == "forbice"){
            return("Hai perso");
        } else{
            return("Hai vinto");
        }
    }

    if (userPick == "forbice"){
        if (cpuPick.name == "sasso"){
            return("Hai perso");
        } else {
            return("Hai vinto");
        }
    }
}