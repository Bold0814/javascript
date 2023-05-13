let $msgr = document.getElementById('msgr');

let $chat = document.getElementById('chat');

let $chat1 = document.getElementById('chat1');

let $spa = document.getElementById('spa');


$chat.style.width = '400px'
$chat.style.height = '300px'
$chat.style.background = '#78d81d'
$chat.style.borderRadius = '40px'
$chat.style.position = 'absolute'
$chat.style.bottom = '80px'
$chat.style.right = '50px'
$chat.style.boxShadow = '0 0 15px #78d81d, 0 0 30px #78d81d, 0 0 45px #78d81d, 0 0 60px #78d81d' 

$chat1.style.width = '400px'
$chat1.style.height = '300px'
$chat1.style.background = '#1e2759'
$chat1.style.position = 'relative'
// $chat1.style.bottom = '80px'
// $chat1.style.right = '50px'
$chat1.style.borderRadius = '40px'

$spa.style.width = '20px'
$spa.style.height = '4px'
$spa.style.background = 'white'
$spa.style.position = 'absolute'
$spa.style.right = '50px'
$spa.style.top = '30px'

function clic () {
    if ($chat.style.display == 'block') {
        $chat.style.display = 'none';
    } else {
        $chat.style.display = 'block';
    }
}

$msgr.addEventListener('click', clic)