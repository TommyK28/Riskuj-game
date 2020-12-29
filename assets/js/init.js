// JavaScript
var score_1 = document.querySelector('#score-1');
var score_2 = document.querySelector('#score-2');
var score_3 = document.querySelector('#score-3');
var total_1 = 0;
var total_2 = 0;
var total_3 = 0;
var button__team_1 = document.querySelectorAll('.flip-card--button-1');
var button__team_2 = document.querySelectorAll('.flip-card--button-2');
var button__team_3 = document.querySelectorAll('.flip-card--button-3');


// add points for VEVERKY
function addPointsV(event) {
    //console.log('click');
    var x = parseInt(event.currentTarget.dataset.value);
    total_1 += x;
    //console.log(x);    
    score_1.innerHTML = total_1;
    this.closest('.flip-card').style.backgroundColor = "var(--color__team-1)";
}

for (var i = 0; i < button__team_1.length; i++ ) {

    var points = button__team_1[i];
    //console.log(points.dataset.value);
    points.addEventListener('click', addPointsV);
    
}

// add points for FIALKY
function addPointsF(event) {
    //console.log('click');
    var x = parseInt(event.currentTarget.dataset.value);
    total_2 += x;
    //console.log(x);
    score_2.innerHTML = total_2;
    this.closest('.flip-card').style.backgroundColor = "var(--color__team-2)";
}

for (var i = 0; i < button__team_2.length; i++ ) {

    var points = button__team_2[i];
    //console.log(points.dataset.value);
    points.addEventListener('click', addPointsF);
}

// add points for SKAUTI
function addPointsS(event) {
    //console.log('click');
    var x = parseInt(event.currentTarget.dataset.value);
    total_3 += x;
    //console.log(x);
    score_3.innerHTML = total_3;
    this.closest('.flip-card').style.backgroundColor = "var(--color__team-3)";
}

for (var i = 0; i < button__team_3.length; i++ ) {

    var points = button__team_3[i];
    //console.log(points.dataset.value);
    points.addEventListener('click', addPointsS);
}        