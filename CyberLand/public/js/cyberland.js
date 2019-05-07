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

function showQuestion1() {
    hideAllPages();
    showElement('vraag1Page');
}

function showQuestion2() {
    hideAllPages();
    showElement('vraag2Page');
}

function showQuestion3() {
    hideAllPages();
    showElement('vraag3Page');
}

function showQuestion4() {
    hideAllPages();
    showElement('vraag4Page');
}

function showRecommendationPage() {
    hideAllPages();
    showElement('recommendationPage');
}

function hideAllPages() {
    var allPages = document.getElementsByClassName("page");
    for (var i = 0; i < allPages.length; i++) {
        allPages[i].style.display = "none";
    }
}

function showElement(page) {
    document.getElementById(page).style.display = "block";
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
    showRecommendations(response);
}

function SendFail(statusCode, errorMessage) {
    console.log(statusCode);
    console.log(errorMessage);
}

function showRecommendations(response) {

}

class Api {
    constructor(request = '', route = '', send = '', content = 'application/json', prefix = 'api/') {
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
hideAllPages();
showQuestion1();
