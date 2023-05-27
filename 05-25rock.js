let choice = ['rock', 'scissor', 'paper'];

const $myPoint = document.querySelector('.myPoint');
const $urDun = document.querySelector('.urDun');
const $robotPoint = document.querySelector('.robotPoint');

const $rock = document.getElementById('rock');
const $paper = document.getElementById('paper');
const $scissor = document.getElementById('scissor');

const $choice1 = document.querySelector('.choice1');
const $choice2 = document.querySelector('.choice2');


let myChoice;
let robotChoice;
let myPoint = 0;
let robotPoint = 0;

function robot() {
let r = Math.floor(Math.random() * 3);
    robotChoice = choice[r];
    console.log(robotChoice);
}

function rock() {
    $urDun.innerHTML = '';
    myChoice = choice[0];
    console.log(myChoice);
    urDun();
    robot();
    $choice1.innerHTML = myChoice;
    $choice2.innerHTML = robotChoice;
}

function paper() {
    $urDun.innerHTML = '';
    myChoice = choice[2];
    console.log(myChoice);
    urDun();
    robot();
    $choice1.innerHTML = myChoice;
    $choice2.innerHTML = robotChoice;
}

function scissor() {
    $urDun.innerHTML = '';
    myChoice = choice[1];
    console.log(myChoice);
    urDun();
    robot();
    $choice1.innerHTML = myChoice;
    $choice2.innerHTML = robotChoice;
}

$rock.addEventListener('click', rock);
$paper.addEventListener('click', paper);
$scissor.addEventListener('click', scissor);

function urDun() {
    if(myChoice == 'rock' && robotChoice == 'scissor') {
        console.log("WIN");
        setTimeout(() => {
            $urDun.innerHTML = 'WIN';
        }, 2000);
        myPoint++;
    } else if (myChoice == 'rock' && robotChoice == 'paper') {
        console.log('LOSE');
        setTimeout(() => {
            $urDun.innerHTML = 'LOSE';
        }, 2000);
        robotPoint++;
    }  else if(myChoice == 'paper' && robotChoice == 'rock') {
        console.log('WIN');
        setTimeout(() => {
            $urDun.innerHTML = 'WIN';
        }, 2000);
        myPoint++;
    } else if(myChoice == 'paper' && robotChoice == 'scissor') {
        console.log('LOSE');
        setTimeout(() => {
            $urDun.innerHTML = 'LOSE';
        }, 2000);
        robotPoint++;
    }  else if(myChoice == 'scissor' && robotChoice == 'paper') {
        console.log('WIN');
        setTimeout(() => {
            $urDun.innerHTML = 'WIN';
        }, 2000);
        myPoint++;
    } else if(myChoice == 'scissor' && robotChoice == 'rock') {
        console.log('LOSE');
        setTimeout(() => {
            $urDun.innerHTML = 'LOSE';
        }, 2000);
        robotPoint++;
    } else {
        console.log('DRAW');
        setTimeout(() => {
            $urDun.innerHTML = 'DRAW';
        }, 2000);
    }
    console.log(myPoint);
    console.log(robotPoint);

    $myPoint.innerHTML = myPoint;
    $robotPoint.innerHTML = robotPoint;
}

