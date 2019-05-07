var budgetInfo
var platformInfo
var multiInfo
var genreInfo


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
        showRecommendationPage(), genreInfo = 'Rpg', testantwoorden()
    });
    buttonD2.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Fps', testantwoorden()
    });
    buttonD3.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Action', testantwoorden()
    });
    buttonD4.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Arcade', testantwoorden()
    });
    buttonD5.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Simulator', testantwoorden()
    });
    buttonD6.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'MMO', testantwoorden()
    });
    buttonD7.addEventListener("click", function () {
        showRecommendationPage(), genreInfo = 'Horror', testantwoorden()
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
    var budget = budgetInfo
    var platform = platformInfo
    var multi = multiInfo
    var genre = genreInfo
    var sendGameMessages = new Api('POST', 'recomended', {
        'budget': budget,
        'platform': platform,
        'multiplayer': multi,
        'genre': genre,
    })

    sendGameMessages.execute(SendSucces, SendFail);
}

function SendSucces(response) {
    console.log(response);
}

function SendFail(statusCode, errorMessage) {
    console.log(statusCode);
    console.log(errorMessage);
}

function testantwoorden() {
    var budget = budgetInfo
    var platform = platformInfo
    var multi = multiInfo
    var genre = genreInfo

    console.log(budget);
    console.log(platform);
    console.log(multi);
    console.log(genre);
}

// ------refrence voor apisend------
// function ApiSend(RoomId) {
//     var info = currentToken;
//     var SendInput = document.getElementById("InputMessage");
//     var SendMessagesApi = new Api('POST', 'messages', {
//         'user_id': info.id,
//         'room_id': RoomId,
//         'description': SendInput.value,
//     });
//     SendMessagesApi.execute(SendSucces, SendFail);
// }

addbuttonactions();
hideAllQuestions();
showQuestion1()
