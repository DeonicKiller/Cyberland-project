var budgetInfo;
var platformInfo;
var multiInfo;
var genreInfo;


function addbuttonactions() {
    var buttonA1 = document.getElementById("button1.1");
    var buttonA2 = document.getElementById("button1.2");

    var buttonB1 = document.getElementById("button2.1");
    var buttonB2 = document.getElementById("button2.2");
    var buttonB3 = document.getElementById("button2.3");
    var buttonB4 = document.getElementById("button2.4");

    var buttonC1 = document.getElementById("button3.1");
    var buttonC2 = document.getElementById("button3.2");

    var buttonD1 = document.getElementById("button4.1");
    var buttonD2 = document.getElementById("button4.2");
    var buttonD3 = document.getElementById("button4.3");
    var buttonD4 = document.getElementById("button4.4");
    var buttonD5 = document.getElementById("button4.5");
    var buttonD6 = document.getElementById("button4.6");
    var buttonD7 = document.getElementById("button4.7");
    var buttonD8 = document.getElementById("button4.8");


    buttonA1.addEventListener("click", function () {
        showQuestion2(), budgetInfo = '0,30'
    });
    buttonA2.addEventListener("click", function () {
        showQuestion2(), budgetInfo = '30,60'
    });

    buttonB1.addEventListener("click", function () {
        showQuestion3(), platformInfo = 'Playstation'
    });
    buttonB2.addEventListener("click", function () {
        showQuestion3(), platformInfo = 'Xbox'
    });
    buttonB3.addEventListener("click", function () {
        showQuestion3(), platformInfo = 'Pc'
    });
    buttonB4.addEventListener("click", function () {
        showQuestion3(), platformInfo = 'Nintendo Switch'
    });

    buttonC1.addEventListener("click", function () {
        showQuestion4(), multiInfo = 'Multiplayer'
    });
    buttonC2.addEventListener("click", function () {
        showQuestion4(), multiInfo = 'Singelplayer'
    });

    buttonD1.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Rpg', ApisendGameInfo()
    });
    buttonD2.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Fps', ApisendGameInfo()
    });
    buttonD3.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Action', ApisendGameInfo()
    });
    buttonD4.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Arcade', ApisendGameInfo()
    });
    buttonD5.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Simulator', ApisendGameInfo()
    });
    buttonD6.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'MMO', ApisendGameInfo()
    });
    buttonD7.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Horror', ApisendGameInfo()
    });
    buttonD8.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Fighting', ApisendGameInfo()
    });
}

function hideAllQuestions() {
    var vraag1Page = document.getElementById("vraag1Page");
    var vraag2Page = document.getElementById("vraag2Page");
    var vraag3Page = document.getElementById("vraag3Page");
    var vraag4Page = document.getElementById("vraag4Page");
    var recommendationPage = document.getElementById("recommendationPage");

    vraag1Page.style.display = "block";
    vraag2Page.style.display = "none";
    vraag3Page.style.display = "none";
    vraag4Page.style.display = "none";
    recommendationPage.style.display = "none";
}

function showQuestion1() {
    var vraag1Page = document.getElementById("vraag1Page");
    var vraag2Page = document.getElementById("vraag2Page");
    var vraag3Page = document.getElementById("vraag3Page");
    var vraag4Page = document.getElementById("vraag4Page");
    var recommendationPage = document.getElementById("recommendationPage");

    vraag1Page.style.display = "block";
    vraag2Page.style.display = "none";
    vraag3Page.style.display = "none";
    vraag4Page.style.display = "none";
    recommendationPage.style.display = "none";
}

function showQuestion2() {
    var vraag1Page = document.getElementById("vraag1Page");
    var vraag2Page = document.getElementById("vraag2Page");
    var vraag3Page = document.getElementById("vraag3Page");
    var vraag4Page = document.getElementById("vraag4Page");
    var recommendationPage = document.getElementById("recommendationPage");

    vraag1Page.style.display = "none";
    vraag2Page.style.display = "block";
    vraag3Page.style.display = "none";
    vraag4Page.style.display = "none";
    recommendationPage.style.display = "none";
}

function showQuestion3() {
    var vraag1Page = document.getElementById("vraag1Page");
    var vraag2Page = document.getElementById("vraag2Page");
    var vraag3Page = document.getElementById("vraag3Page");
    var vraag4Page = document.getElementById("vraag4Page");
    var recommendationPage = document.getElementById("recommendationPage");

    vraag1Page.style.display = "none";
    vraag2Page.style.display = "none";
    vraag3Page.style.display = "block";
    vraag4Page.style.display = "none";
    recommendationPage.style.display = "none";
}

function showQuestion4() {
    var vraag1Page = document.getElementById("vraag1Page");
    var vraag2Page = document.getElementById("vraag2Page");
    var vraag3Page = document.getElementById("vraag3Page");
    var vraag4Page = document.getElementById("vraag4Page");
    var recommendationPage = document.getElementById("recommendationPage");

    vraag1Page.style.display = "none";
    vraag2Page.style.display = "none";
    vraag3Page.style.display = "none";
    vraag4Page.style.display = "block";
    recommendationPage.style.display = "none";
}

function showRecommendationPage() {
    var vraag1Page = document.getElementById("vraag1Page");
    var vraag2Page = document.getElementById("vraag2Page");
    var vraag3Page = document.getElementById("vraag3Page");
    var vraag4Page = document.getElementById("vraag4Page");
    var recommendationPage = document.getElementById("recommendationPage");

    vraag1Page.style.display = "none";
    vraag2Page.style.display = "none";
    vraag3Page.style.display = "none";
    vraag4Page.style.display = "none";
    recommendationPage.style.display = "block";
}

function ApisendGameInfo() {
    var budget = budgetInfo;
    var platform = platformInfo;
    var multi = multiInfo;
    var genre = genreInfo;
    var sendGameMessages = new Api('POST', 'recomended', {
        'budget': budget,
        'platform': platform,
        'multiplayer': multi,
        'genre': genre,
    });

    sendGameMessages.execute(SendSucces, SendFail);
}

function SendSucces(response) {
    console.log(response);
    var aantalRooms = response.length;
    for (let teller = 0; teller < aantalRooms; teller++){
        console.log(response[teller])
        var recommendationPlaceholder = document.getElementById("recommendationPlaceholder");
        recommendationPlaceholder.innerHTML = recommendationPlaceholder.innerHTML + '<div style="display: inline-block;"> <img src="'+ response[teller].Image +'" alt="'+ response[teller].Name +'" style="width:250px;height:300px"> <br> <h3> '+response[teller].Name+'</h3> <h3> €'+response[teller].Budget+'</h3> </div>'
    }
}

function SendFail(statusCode, errorMessage) {
    console.log(statusCode);
    console.log(errorMessage);
}

class Api {
    constructor(request = '', route = '', send = '', content = 'application/json' , prefix = 'api/') {
        this.request = request;
        this.route = route;
        this.content = content;
        this.send = send;
        this.prefix = prefix;
    }

    execute(callback, fail) {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function () {
            if (xHttp.readyState == XMLHttpRequest.DONE) {
                if (xHttp.status == 200 || xHttp.status == 201) {
                    var response = JSON.parse(xHttp.response);
                    callback(response);
                } else {
                    fail(xHttp.status);
                }
            }
        };

        xHttp.onerror = function () {
            fail(xHttp.status);
        };

        xHttp.open(this.request, this.prefix + this.route, true);
        xHttp.setRequestHeader('Content-Type', this.content);
        xHttp.send(JSON.stringify(this.send));
    }
}

addbuttonactions();
hideAllQuestions();
showQuestion1();

// function showRooms(response) {
//     console.log(response);
//     var aantalRooms = response.length;
//     for (var teller = 0; teller < aantalRooms; teller++) {
//         var buttonPlacement = document.getElementById("creatButtons");
//         buttonPlacement.innerHTML = buttonPlacement.innerHTML + "<button id='Room" + teller + "Button'>" + response[teller].name + "</button>";
//     }
//     ButtonActions(response);
// }