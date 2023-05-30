let choice = ['&#9994', '&#9996;&#127995;', '&#9995;&#127997;'];
// let choice = ['rock', 'scissor', 'paper'];

const $myPoint = document.querySelector('.myPoint');
const $urDun = document.querySelector('.urDun');
const $robotPoint = document.querySelector('.robotPoint');

const $rock = document.getElementById('rock');
const $paper = document.getElementById('paper');
const $scissor = document.getElementById('scissor');

const $choice1 = document.querySelector('.choice1');
const $choice2 = document.querySelector('.choice2');
const $ner = document.getElementById('ner');
const $start = document.getElementById('start');


let myChoice;
let robotChoice;
let myPoint;
let robotPoint;
let t;


function start() {
    t = prompt('Нэрээ оруулна уу');
    $ner.innerHTML = t;
    myPoint = 0;
    robotPoint = 0;
    $myPoint.innerHTML = myPoint;
    $robotPoint.innerHTML = robotPoint;
    setTimeout(() => {
        $urDun.innerHTML = ''
    }, 1000);
}

// start();

function robot() {
let r = Math.floor(Math.random() * 3);
    robotChoice = choice[r];
    console.log(robotChoice);
}

function rock() {
    $urDun.innerHTML = '';
    myChoice = choice[0];
    console.log(myChoice);
    robot();
    urDun();
    $choice1.innerHTML = myChoice;
    $choice2.innerHTML = robotChoice;
}

function paper() {
    $urDun.innerHTML = '';
    myChoice = choice[2];
    console.log(myChoice);
    robot();
    urDun();
    $choice1.innerHTML = myChoice;
    $choice2.innerHTML = robotChoice;
}

function scissor() {
    $urDun.innerHTML = '';
    myChoice = choice[1];
    console.log(myChoice);
    robot();
    urDun();
    $choice1.innerHTML = myChoice;
    $choice2.innerHTML = robotChoice;
}

$rock.addEventListener('click', rock);
$paper.addEventListener('click', paper);
$scissor.addEventListener('click', scissor);
$start.addEventListener('click', start);

function urDun() {
    if(myChoice == '&#9994' && robotChoice == '&#9996;&#127995;') {
        console.log("WIN");
        setTimeout(() => {
            $urDun.innerHTML = 'WIN';
        }, 1000);
        myPoint++;
    } else if (myChoice == '&#9994' && robotChoice == '&#9995;&#127997;') {
        console.log('LOSE');
        setTimeout(() => {
            $urDun.innerHTML = 'LOSE';
        }, 1000);
        robotPoint++;
    }  else if(myChoice == '&#9995;&#127997;' && robotChoice == '&#9994') {
        console.log('WIN');
        setTimeout(() => {
            $urDun.innerHTML = 'WIN';
        }, 1000);
        myPoint++;
    } else if(myChoice == '&#9995;&#127997;' && robotChoice == '&#9996;&#127995;') {
        console.log('LOSE');
        setTimeout(() => {
            $urDun.innerHTML = 'LOSE';
        }, 1000);
        robotPoint++;
    }  else if(myChoice == '&#9996;&#127995;' && robotChoice == '&#9995;&#127997;') {
        console.log('WIN');
        setTimeout(() => {
            $urDun.innerHTML = 'WIN';
        }, 1000);
        myPoint++;
    } else if(myChoice == '&#9996;&#127995;' && robotChoice == '&#9994') {
        console.log('LOSE');
        setTimeout(() => {
            $urDun.innerHTML = 'LOSE';
        }, 1000);
        robotPoint++;
    } else {
        console.log('DRAW');
        setTimeout(() => {
            $urDun.innerHTML = 'DRAW';
        }, 1000);
    }
    console.log(myPoint);
    console.log(robotPoint);

    $myPoint.innerHTML = myPoint;
    $robotPoint.innerHTML = robotPoint;
    
    if(myPoint >= 10) {
        alert(t + 'яллаа')
        
    } else if(robotPoint >=10){
        alert('robot яллаа')
    }
}


