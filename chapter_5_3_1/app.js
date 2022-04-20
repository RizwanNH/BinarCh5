let pScore = 0;
let cScore = 0;


const playerScore = document.getElementById('menang');
const computerScore = document.getElementById('kalah');
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function win(userChoice, computerChoice) {
    pScore++;
    playerScore.innerHTML = pScore;
    computerScore.innerHTML = cScore;
    result_p.innerHTML = "BUDI WIN";
}

function lose(userChoice, computerChoice) {
    cScore++;
    playerScore.innerHTML = pScore;
    computerScore.innerHTML = cScore;
    result_p.innerHTML = "COMP WIN";
}

function draw(userChoice, computerChoice) {
    playerScore.innerHTML = pScore;
    computerScore.innerHTML = cScore;
    result_p.innerHTML = "DRAW";
}

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

function resetComDisplay() {
    document.getElementById('rcom').style.display="none";
    document.getElementById('pcom').style.display="none";
    document.getElementById('scom').style.display="none";
}

function game(userChoice) {
    document.getElementById('hasil').style.visibility='visible'
    const computerChoice = getComputerChoice();
    resetComDisplay();
    tombol = document.getElementById(computerChoice + 'com').style.display="block";
    // console.log("test", tombol);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
                win(userChoice, computerChoice);
                console.log("BUDI WINS");
                break;
        case "sr":
        case "rp":
        case "ps":
                lose(userChoice, computerChoice)
                console.log("COMP WINS");
                break
        case "rr":
        case "pp":
        case "ss":
                draw(userChoice, computerChoice)
                console.log("DRAW");
                break;
    }
}


function main() {
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}

function getScore(){
    fetch('http://localhost:3000/getscore')
    .then(result => result.json())
    .then(output => printScore(output));
    //console.log('Checkout this JSON! ', output[0].nama));
}

function printScore(output){
    document.getElementById('hasil').style.visibility='visible'
    var score = output[0].nama + " : " + output[0].score;
    score = score + "<br>";
    score = score + output[1].nama + " : " + output[1].score;
    document.getElementById('hasil').innerHTML = score;
}

function postScore() {
    var data = [{nama:"Budi",score:pScore},{nama:"Comp",score:cScore}];
    let result = fetch('/postscore', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(data)
    });

    result.then((success) => { console.log(success) });
}
main();
