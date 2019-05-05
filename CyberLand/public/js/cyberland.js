
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


    buttonA1.addEventListener("click", function () {showQuestion2()});    
    buttonA2.addEventListener("click", function () {showQuestion2()});

    buttonB1.addEventListener("click", function () {showQuestion3()});    
    buttonB2.addEventListener("click", function () {showQuestion3()});
    buttonB3.addEventListener("click", function () {showQuestion3()});    
    buttonB4.addEventListener("click", function () {showQuestion3()});

    buttonC1.addEventListener("click", function () {showQuestion4()});    
    buttonC2.addEventListener("click", function () {showQuestion4()});

    buttonD1.addEventListener("click", function () {showRecommendationPage()});    
    buttonD2.addEventListener("click", function () {showRecommendationPage()});
    buttonD3.addEventListener("click", function () {showRecommendationPage()});    
    buttonD4.addEventListener("click", function () {showRecommendationPage()});
    buttonD5.addEventListener("click", function () {showRecommendationPage()});    
    buttonD6.addEventListener("click", function () {showRecommendationPage()});

}

function hideAllQuestions(){
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

function showQuestion1(){
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

function showQuestion2(){
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

function showQuestion3(){
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

function showQuestion4(){
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

function showRecommendationPage(){
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






// function vraagEnAntwoord() {
//     var vraag1 = document.getElementById("vraag1");
//     var button10 = document.getElementById("Button1");
//     var button20 = document.getElementById("Button2");

// var i = i + 1;
//     vraag1.innerHTML = (vragenlijst[i][0]);
//     button10.innerHTML = (antwoordlijst[i][0]);
//     button20.innerHTML = (antwoordlijst[i][1]);

// }

// var vragenlijst = ["1","2","3"];
// var antwoordlijst =[ ["multiplayer", "singleplayer"],
//                      ["Console", "Computer"],
//                      ["OpenWorld", "Liniar"]
//                      ];
// var i = 0;
addbuttonactions();
hideAllQuestions();
showQuestion1()