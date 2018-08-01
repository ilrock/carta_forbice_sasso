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
            var finalImageHtml = "<img src='" + cpuPick.image + "' height='100' width='100'>"
            var finalTextHtml = "<h3> Il Computer ha scelto:" + cpuPick.name + "</h3>";

            document.getElementById("computer-choice").innerHTML = finalImageHtml + finalTextHtml;
            document.getElementById("result").innerHTML = checkResult();

            document.getElementById("player-score").innerHTML = score.user;
            document.getElementById("cpu-score").innerHTML = score.cpu;
        }
        
    }, 150);
}

function checkResult(){
    if(cpuPick.name == userPick){
        return "Avete pareggiato"
    }

    if(userPick == "sasso"){
        if (cpuPick.name == "forbice"){
            score.user++;
            return "Hai vinto";
        } else {
            score.cpu ++;
            return "Hai perso";
        }
    }

    if(userPick == "carta"){
        if (cpuPick.name == "forbice"){
            score.cpu ++;
            return "Hai perso";
        } else {
            score.user++;
            return "Hai vinto";
        }
    }

    if(userPick == "forbice"){
        if (cpuPick.name == "sasso"){
            score.cpu ++;
            return "Hai perso";
        } else {
            score.user++;
            return "Hai vinto";
        }
    } 
}