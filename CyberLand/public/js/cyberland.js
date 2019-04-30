
function addbuttonactions() {
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");

    button1.addEventListener("click", function () {vraagEnAntwoord();});    
    button2.addEventListener("click", function () {vraagEnAntwoord();});
}

function vraagEnAntwoord() {
    var vraag1 = document.getElementById("vraag1");
    var button10 = document.getElementById("Button1");
    var button20 = document.getElementById("Button2");

var i = i + 1;
    vraag1.innerHTML = (vragenlijst[i][0]);
    button10.innerHTML = (antwoordlijst[i][0]);
    button20.innerHTML = (antwoordlijst[i][1]);

}

var vragenlijst = ["1","2","3"];
var antwoordlijst =[ ["multiplayer", "singleplayer"],
                     ["Console", "Computer"],
                     ["OpenWorld", "Liniar"]
                     ];
var i = 0;
addbuttonactions();
