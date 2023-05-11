//Accessing Elements
//Modifying Elements
//Creating
//Events
//Styling Elements

// document.getElementById('h1').innerText = 'Mongolia';

let $h1 = document.getElementById('h1');

// $h1.innerText = 'Mongolia';

// $h1.style.backgroundColor = 'aqua'

// if($h1.innerText == 'Hello') {
//     $h1.innerText = 'Mongolia';
// } else {
//     $h1.innerText = 'Hello';
// }

// function uurchluh() {
//     $h1.style.backgroundColor = 'aqua';
// }

// uurchluh();

function angid() {
    if($h1.innerText == 'Hello') {
        $h1.innerText = 'Сайн уу';
    } else {
        $h1.innerText = 'Орчуулагдахгүй';
    }
}

angid();