var budgetInfo;
var platformInfo;
var multiInfo;
var genreInfo;

function addbuttonactions() {

    document.getElementById("quizButton").addEventListener("click", function () {
        var answers = document.getElementById("answers");
        while (answers.firstChild) {
            answers.removeChild(answers.firstChild);
        }
        showQuestion1()
    });

    document.getElementById("homeButton").addEventListener("click", function () {
        showHomePage()
    });

    document.getElementById("button1.1").addEventListener("click", function () {
        showQuestion2();
        budgetInfo = '0,30';
        showAnswer('Budget', '€0 t/m €30');
    });

    document.getElementById("button1.2").addEventListener("click", function () {
        showQuestion2();
        budgetInfo = '30,60';
        showAnswer('Budget', '€30 t/m €60');
    });

    document.getElementById("button2.1").addEventListener("click", function () {
        showQuestion3();
        platformInfo = 'Playstation';
        showAnswer('Platform', 'Playstation');
    });

    document.getElementById("button2.2").addEventListener("click", function () {
        showQuestion3();
        platformInfo = 'Xbox';
        showAnswer('Platform', 'Xbox');
    });

    document.getElementById("button2.3").addEventListener("click", function () {
        showQuestion3();
        platformInfo = 'Pc';
        showAnswer('Platform', 'Pc');
    });

    document.getElementById("button2.4").addEventListener("click", function () {
        showQuestion3();
        platformInfo = 'Nintendo Switch';
        showAnswer('Platform', 'Nintendo Switch');
    });

    document.getElementById("button3.1").addEventListener("click", function () {
        showQuestion4();
        multiInfo = 'Multiplayer';
        showAnswer('Multiplayer', 'Ja');
    });

    document.getElementById("button3.2").addEventListener("click", function () {
        showQuestion4();
        multiInfo = 'Singelplayer';
        showAnswer('Singelplayer', 'Ja');
    });

    document.getElementById("button4.1").addEventListener("click", function () {
        showRecommendationPage();
        genreInfo = 'Rpg';
        showAnswer('Genre', 'Rpg');
    });

    document.getElementById("button4.2").addEventListener("click", function () {
        showRecommendationPage();
        genreInfo = 'Fps';
        showAnswer('Genre', 'Fps');
    });

    document.getElementById("button4.3").addEventListener("click", function () {
        showRecommendationPage();
        genreInfo = 'Action';
        showAnswer('Genre', 'Action');
    });

    document.getElementById("button4.4").addEventListener("click", function () {
        showRecommendationPage();
        genreInfo = 'Arcade';
        showAnswer('Genre', 'Arcade');
    });

    document.getElementById("button4.5").addEventListener("click", function () {
        showRecommendationPage();
        genreInfo = 'Simulator';
        showAnswer('Genre', 'Simulator');
    });

    document.getElementById("button4.6").addEventListener("click", function () {
        showRecommendationPage();
        genreInfo = 'MMO';
        showAnswer('Genre', 'MMO');
    });

    document.getElementById("button4.7").addEventListener("click", function () {
        showRecommendationPage();
        genreInfo = 'Horror';
        showAnswer('Genre', 'Horror');
    });

    document.getElementById("button4.8").addEventListener("click", function () {
        showRecommendationPage();
        genreInfo = 'Fighting';
        showAnswer('Genre', 'Fighting');
    });
}

function showAnswer(s1, s2) {
    var answers = document.getElementById('answers');

    var p1 = document.createElement('h3');
    p1.innerHTML = s1 + ': ' + s2;

    answers.appendChild(p1);
}

function showHomePage() {
    hideAllPages();
    showElement('homePage');
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
    ApisendGameInfo();
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
    var aantalRooms = response.length;
    for (let teller = 0; teller < aantalRooms; teller++) {
        console.log(response[teller])
        var recommendationPlaceholder = document.getElementById("recommendationPlaceholder");
        recommendationPlaceholder.innerHTML = recommendationPlaceholder.innerHTML + '<div style="display: inline-block;"> <img src="' + response[teller].Image + '" alt="' + response[teller].Name + '" style="width:250px;height:300px"> <br> <h3> ' + response[teller].Name + '</h3> <h3> €' + response[teller].Budget + '</h3> </div>'
    }
}

function SendFail(statusCode, errorMessage) {
    console.log(statusCode);
    console.log(errorMessage);
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
showHomePage();

// function showRooms(response) {
//     console.log(response);
//     var aantalRooms = response.length;
//     for (var teller = 0; teller < aantalRooms; teller++) {
//         var buttonPlacement = document.getElementById("creatButtons");
//         buttonPlacement.innerHTML = buttonPlacement.innerHTML + "<button id='Room" + teller + "Button'>" + response[teller].name + "</button>";
//     }
//     ButtonActions(response);
// }
