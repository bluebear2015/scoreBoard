
let point1 = 1
let point3 = 3
let score = 0
let score2 = 0
function pointCount1() {
    score += 1
    console.log(score);
    updateDom()
}



function pointCount3() {
    score += 3
    console.log(score);
    updateDom()
}

function awayPointCount1() {
    score2 += 1
    updateAwayDom()
}

function awayPointCount3() {
    score2 += 3
    updateAwayDom()
}


function updateAwayDom() {
    let elm = document.getElementById('awayScore')
    elm.innerText = score2
}

function clearScore() {
    score = 0
    score2 = 0
    updateAwayDom()
    updateDom()

}

function updateDom() {
    let elm = document.getElementById('score')
    elm.innerText = score
}



